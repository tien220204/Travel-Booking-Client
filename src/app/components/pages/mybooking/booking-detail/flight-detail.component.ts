import { Component, OnInit } from '@angular/core';
import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';
import { BookingBarComponent } from '../../../common/@base/booking-bar/booking-bar.component';
import { CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HotelApiService } from '../../../../services/HotelApi.service';
import { FlightApiService } from '../../../../services/FlightApi.Service';
import { FlightDTO } from '../../../../DTO/FlightDto.DTO';

@Component({
  selector: 'app-flight-detail',
  standalone: true,
  imports: [
    NgClass,
    CommonModule,
    SubscribeComponent,
    BookingBarComponent, 
    RouterLink
  ],
  templateUrl: './flight-detail.component.html',
  styleUrl: './flight-detail.component.scss'
})
export class FlightDetailComponent   {
  flightId: string = '';
  flightDetail : FlightDTO | null = null;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.flightId = params['flightId'];
    });
    console.log(this.flightId);
    this.getFlight();
  }
  constructor(private route: ActivatedRoute,
    private flightApiService: FlightApiService
  ) { }
  
  currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }
    getFlight() {
      this.flightApiService.getFlightById(this.flightId).then(
        (res) => {
          
          this.flightDetail = res as FlightDTO;
          
        },
        err => {
          console.log(err);
        }
      )
    }
}
