import { CommonModule, NgClass, NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { detailHotelDto } from '../../../../DTO/hotelDetails.Dto.dto';
import { HotelApiService } from '../../../../services/HotelApi.service';
import { TourDto } from '../../../../DTO/tourDto.Dto';
import { TourApiService } from '../../../../services/TourApi.service';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [NgClass, CommonModule, SubscribeComponent, RouterModule],
  templateUrl: './tour-detail.component.html',
  styleUrl: './tour-detail.component.scss',
  host: { 'collision-id': 'HotelDetailComponent' },
})
export class TourDetailComponent implements OnInit {
  tourId: string = '';
  hotelDetails: detailHotelDto | null = null;
  tourDTO : TourDto | null = null;
  constructor(private route: ActivatedRoute,
   private tourApiService : TourApiService
  ) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tourId = params['tourId'];
      this.tourApiService.getTourDetail(this.tourId).then(
        (res) => {
          
          this.tourDTO = res as TourDto;
          
          
        }, 
        err => {
          console.log(err);
        }
      )
    });
    console.log(this.tourId);
    
    
  }

  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
  }

 
}
