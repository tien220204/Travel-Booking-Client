import { Component, OnInit } from '@angular/core';
import { SubscribeComponent } from '../../common/@base/subscribe/subscribe.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [SubscribeComponent],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  host: { 'collision-id': 'ContactPageComponent' },
})
export class ContactPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
