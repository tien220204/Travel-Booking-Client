import { Component, OnInit } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [DpDatePickerModule],
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
})
export class HomeBannerComponent implements OnInit {
  datePickerConfig = {
    format: 'YYYY-MM-DD',
  };

  constructor() {}

  ngOnInit(): void {}
}
