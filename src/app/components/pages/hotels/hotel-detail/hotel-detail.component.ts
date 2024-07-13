import { CommonModule, NgClass, NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';
import { ActivatedRoute } from '@angular/router';
import { detailHotelDto } from '../../../../DTO/hotelDetails.Dto.dto';
import { HotelApiService } from '../../../../services/HotelApi.service';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [NgClass, CommonModule, SubscribeComponent],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.scss',
  host: { 'collision-id': 'HotelDetailComponent' },
})
export class HotelDetailComponent implements OnInit {
  hotelId: string = '';
  hotelDetails: detailHotelDto | null = null;

  reviewCounts: Map<number, number> = new Map<number, number>();

  percent1Star: number = 0;
  percent2Star: number = 0;
  percent3Star: number = 0;
  percent4Star: number = 0;
  percent5Star: number = 0;
  constructor(private route: ActivatedRoute,
    private hotelApiService: HotelApiService
  ) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.hotelId = params['hotelId'];
    });
    console.log(this.hotelId);
    this.getHotel();
    
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
