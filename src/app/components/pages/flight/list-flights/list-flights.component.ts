import { Component, OnInit } from '@angular/core';
import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';
import { BookingBarComponent } from '../../../common/@base/booking-bar/booking-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-flights',
  standalone: true,
  imports: [
    SubscribeComponent,
    BookingBarComponent,
    RouterLink
  ],
  templateUrl: './list-flights.component.html',
  styleUrl: './list-flights.component.scss',
  host: { 'collision-id': 'ListFlightsComponent'}
})
export class ListFlightsComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }

}
