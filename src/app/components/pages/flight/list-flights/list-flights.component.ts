import { Component, OnInit } from '@angular/core';
import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';
import { BookingBarComponent } from '../../../common/@base/booking-bar/booking-bar.component';
import { RouterLink } from '@angular/router';
import { FlightApiService } from '../../../../services/FlightApi.Service';
import { FlightDTO } from '../../../../DTO/FlightDto.DTO';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-list-flights',
  standalone: true,
  imports: [
    SubscribeComponent,
    BookingBarComponent,
    RouterLink, 
    CommonModule  
  ],
  templateUrl: './list-flights.component.html',
  styleUrl: './list-flights.component.scss',
  host: { 'collision-id': 'ListFlightsComponent'}, 
  providers: [DecimalPipe]
})
export class ListFlightsComponent implements OnInit {
  flights : FlightDTO[] = []
  constructor(
    private flightApiService: FlightApiService
  ){}
  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights() {
    this.flightApiService.getAllFlight().then(
      (res) => {
        // console.log(res);
        this.flights = res as FlightDTO[];
        console.log(this.flights);
      }, 
      err => {
        console.log(err);
      }
    )
  }
}
