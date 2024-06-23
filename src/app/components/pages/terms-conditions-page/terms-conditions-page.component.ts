import { Component, OnInit } from '@angular/core';
import { SubscribeComponent } from '../../common/@base/subscribe/subscribe.component';

@Component({
  selector: 'app-terms-conditions-page',
  standalone: true,
  imports: [SubscribeComponent],
  templateUrl: './terms-conditions-page.component.html',
  styleUrls: ['./terms-conditions-page.component.scss'],
  host: { 'collision-id': 'TermsConditionsPageComponent' },
})
export class TermsConditionsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
