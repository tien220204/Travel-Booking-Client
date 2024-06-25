import { CommonModule, NgClass, NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [NgClass,CommonModule,SubscribeComponent],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.scss',
  host: { 'collision-id': 'HotelDetailComponent' },
})
export class HotelDetailComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(){}
  currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}
