import { Component, OnInit } from '@angular/core';

import { BookingBarComponent } from '../../../common/@base/booking-bar/booking-bar.component';
import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HotelApiService } from '../../../../services/HotelApi.service';
import { listHotelDto } from '../../../../DTO/listHotelDto.dto';
import { FormsModule } from '@angular/forms';
import { TourDto } from '../../../../DTO/tourDto.Dto';
import { TourApiService } from '../../../../services/TourApi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-hotels',
  standalone: true,
  imports: [
    SubscribeComponent,
    BookingBarComponent,
    RouterLink, FormsModule, CommonModule
  ],
  templateUrl: './list-tours.component.html',
  styleUrl: './list-tours.component.scss'
})
export class ListToursComponent implements OnInit  {
  tournameSearch : string  = '';
  listHotelDto : listHotelDto | null = null;
 
  listTour : TourDto[] | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourApiService : TourApiService
  ){}
  ngOnInit(): void {
    this.loadListTour();
  }
  onSubmit(){}
  loadListTour(){
    this.tourApiService.getAllTour().then(
      (res) => {
        // console.log(res);
        this.listTour = res as TourDto[];
        
        
      }, 
      err => {
        console.log(err);
      }
    )
  }
}
