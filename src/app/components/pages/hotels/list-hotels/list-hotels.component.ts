import { Component, OnInit } from '@angular/core';
import { HotelsComponent } from '../../../common/@base/hotels/hotels.component';
import { BookingBarComponent } from '../../../common/@base/booking-bar/booking-bar.component';
import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';

@Component({
  selector: 'app-list-hotels',
  standalone: true,
  imports: [
    SubscribeComponent,
    BookingBarComponent
  ],
  templateUrl: './list-hotels.component.html',
  styleUrl: './list-hotels.component.scss'
})
export class ListHotelsComponent implements OnInit  {
  constructor(){}
  ngOnInit(): void {
    
  }

}
