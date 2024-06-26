import { Component, OnInit } from '@angular/core';
import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';
import { BookingBarComponent } from '../../../common/@base/booking-bar/booking-bar.component';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-flight-detail',
  standalone: true,
  imports: [
    NgClass,
    CommonModule,
    SubscribeComponent,
    BookingBarComponent
  ],
  templateUrl: './flight-detail.component.html',
  styleUrl: './flight-detail.component.scss'
})
export class FlightDetailComponent implements OnInit  {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(){}
  currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}
