import { Component, OnInit } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';

@Component({
  selector: 'app-booking-bar',
  standalone: true,
  imports: [DpDatePickerModule],
  templateUrl: './booking-bar.component.html',
  styleUrl: './booking-bar.component.scss'
})
export class BookingBarComponent implements OnInit {
  datePickerConfig = {
    format: 'YYYY-MM-DD'
  };

  constructor() { }

  ngOnInit(): void { }
}
