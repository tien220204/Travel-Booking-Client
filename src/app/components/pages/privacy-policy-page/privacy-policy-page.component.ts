import { Component, OnInit } from '@angular/core';
import { SubscribeComponent } from '../../common/@base/subscribe/subscribe.component';

@Component({
  selector: 'app-privacy-policy-page',
  standalone: true,
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.scss'],
  host: { 'collision-id': 'PrivacyPolicyPageComponent' },
  imports: [SubscribeComponent],
})
export class PrivacyPolicyPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
