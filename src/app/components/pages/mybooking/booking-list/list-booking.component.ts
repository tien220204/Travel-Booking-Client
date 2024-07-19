import { Component, OnInit } from '@angular/core';
import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';
import { BookingBarComponent } from '../../../common/@base/booking-bar/booking-bar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FlightApiService } from '../../../../services/FlightApi.Service';
import { FlightDTO } from '../../../../DTO/FlightDto.DTO';
import { CommonModule, DecimalPipe } from '@angular/common';
import { AiportDto } from '../../../../DTO/airportDto.Dto';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HttpClient } from '@angular/common/http';
import { BookingApiService } from '../../../../services/BookingApiService.service';
import { listBookingDTO } from '../../../../DTO/listBookingDto.dto';

@Component({
  selector: 'app-list-flights',
  standalone: true,
  imports: [
    SubscribeComponent,
    BookingBarComponent,
    RouterLink, 
    CommonModule  , 
    FormsModule , 
    DpDatePickerModule
  ],
  templateUrl: './list-booking.component.html',
  styleUrl: './list-booking.component.scss',
  host: { 'collision-id': 'ListFlightsComponent'}, 
  providers: [DecimalPipe]
})
export class ListBookingComponent implements OnInit {
  listBooking : listBookingDTO | null = null;

  constructor(
    private flightApiService: FlightApiService, 
    private router: Router, 
    private route: ActivatedRoute
    , private http: HttpClient, 
    private bookingApiService: BookingApiService
  ){}
  ngOnInit(): void {
    
    this.loadBooking();
  }

  loadBooking() {
    this.bookingApiService.allBooking().then(
      (res) => {
       console.log(res);
       this.listBooking = res as listBookingDTO;
       console.log(this.listBooking);
      }, 
      err => {
        console.log(err);
      }
    )
  }
  

 
}
