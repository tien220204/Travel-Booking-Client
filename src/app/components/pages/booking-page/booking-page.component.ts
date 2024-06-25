import { Component } from '@angular/core';
import { SubscribeComponent } from '../../common/@base/subscribe/subscribe.component';
import { BookingBarComponent } from '../../common/@base/booking-bar/booking-bar.component';

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [
    SubscribeComponent,
    BookingBarComponent
  ],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.scss'
})
export class BookingPageComponent {

}
