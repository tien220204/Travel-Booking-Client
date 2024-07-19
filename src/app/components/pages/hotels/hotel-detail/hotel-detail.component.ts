import { CommonModule, NgClass, NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { detailHotelDto } from '../../../../DTO/hotelDetails.Dto.dto';
import { HotelApiService } from '../../../../services/HotelApi.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reviewDto } from '../../../../DTO/reviewDto.dto';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [NgClass, CommonModule, SubscribeComponent, RouterModule , FormsModule, ReactiveFormsModule],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.scss',
  host: { 'collision-id': 'HotelDetailComponent' },
})
export class HotelDetailComponent implements OnInit {
  reviewForm: FormGroup = this.fb.group({
    rating: [''],
    reviewTitle: [''],
    reviewText: ['']
  });

  ratingStar : number = 1;
  hotelId: string = '';
  hotelDetails: detailHotelDto | null = null;
  reviewDto : reviewDto | null = null;
  reviewCounts: Map<number, number> = new Map<number, number>();

  percent1Star: number = 0;
  percent2Star: number = 0;
  percent3Star: number = 0;
  percent4Star: number = 0;
  percent5Star: number = 0;
  constructor(private route: ActivatedRoute,
    private hotelApiService: HotelApiService, 
    private fb: FormBuilder, 
    private router: Router
  ) { 
    this.reviewForm = this.fb.group({
      rating: [''],
 
      reviewText: ['']
    });

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.hotelId = params['hotelId'];
    });
    console.log(this.hotelId);
    this.getHotel();
    
  }
  onSubmit(): void {
    if(this.reviewForm!==null){
      if (this.reviewForm.valid) {
        // console.log('Selected Rating:', this.reviewForm.value.rating);
        // console.log('Review Title:', this.reviewForm.value.reviewTitle);
        // console.log('Review Text:', this.reviewForm.value.reviewText);
       
        let text = this.reviewForm.value.reviewText + '';
        let ratingNumber = this.parseRating(this.reviewForm.value.rating);
        if(Number.isNaN(ratingNumber)){
          ratingNumber = 1;
        }
        if( text.length===0){
          alert("Please do not leave the input fields blank");
          return;
        }
        this.reviewDto = {
          reviewId :  0,
          reviewStar: ratingNumber+'',
          reviewText: text,
          userId: 0,
          userFullName: '',
          hotelId: Number.parseInt(this.hotelId),
          restaurantId: 0,
          isHide: 'false'
        };
        this.hotelApiService.addReview(this.reviewDto).then(
          (res) => {
            console.log(res);
            alert("Add Review To This Hotel Success");
            window.location.reload();
            
          },
          err => {
            alert("Error, You Can Not Review This Hotel Now")
            console.log(err);
          }
        )
        // console.log('Selected Rating:', ratingNumber);

      }
    }
    
  }
  parseRating(ratingString: string): number {
    return parseInt(ratingString.split('-')[1], 10);
  }

  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
  }

  getHotel() {
    this.hotelApiService.getHotelDetail(this.hotelId).then(
      (res) => {
        console.log(res);
        this.hotelDetails = res as detailHotelDto;
        console.log(this.hotelDetails);

        if(this.hotelDetails?.listReview){
          const totalReview = this.hotelDetails?.count || 1;
          this.hotelDetails.listReview.forEach(review => {
            
            const star =  parseInt(review.reviewStar);
            if (this.reviewCounts.has(star)) {
              this.reviewCounts.set(star, this.reviewCounts.get(star)! + 1);
            } else {
              this.reviewCounts.set(star, 1);
            }
          });
          for(let i=1; i<=5; i++){
            this.reviewCounts.set(i, Math.round((this.reviewCounts.get(i)! / totalReview)*100));
          }
          console.log(this.reviewCounts);
        }
        
      },
      err => {
        console.log(err);
      }
    )
  }
}
