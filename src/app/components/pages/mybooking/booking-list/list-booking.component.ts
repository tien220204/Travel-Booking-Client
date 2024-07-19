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
  flights : FlightDTO[] = []
  airports : AiportDto[] = []
  
  airportFromId: string = '';
  airportToId: string = '';
  date: string='';
  price: string = '';
  datePickerConfig = {
    format: 'YYYY-MM-DD'
  };
  constructor(
    private flightApiService: FlightApiService, 
    private router: Router, 
    private route: ActivatedRoute
    , private http: HttpClient
  ){}
  ngOnInit(): void {
    
    this.loadAirport();
    this.route.queryParams.subscribe(params => {
      const from = params['from'];
      const to = params['to'];
      const date = params['date'];
      const price = params['price'];

      console.log(from, to, date, price);
      this.loadFlights(from, to, date, price);
    });
    
  }

  loadFlights(from: string, to: string, date: string, price: string) {
    const queryParams: any = {};

    if (from) queryParams.from = from;
    if (to) queryParams.to = to;
    if (date) queryParams.date = date;
    if (price) queryParams.price = price;
    this.flightApiService.getAllFlight(queryParams).then(
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

  loadAirport(){
    this.flightApiService.getAllAirport().then(
      (res) => {
        this.airports = res as AiportDto[];
        console.log(this.airports);
      }, 
      err => {
        console.log(err);
      }
    )
  }
  onSubmit(){
    console.log("ok")
    const queryParams: any = {};
    if (this.airportFromId) queryParams.from = this.airportFromId;
    if (this.airportToId) queryParams.to = this.airportToId;
    if (this.date) queryParams.date = this.date;
    if (this.price) queryParams.price = this.price;
    this.router.navigate(['/flights-listing'], { queryParams });
  }
}
