import { Component, OnInit } from '@angular/core';
import { SubscribeComponent } from '../../common/@base/subscribe/subscribe.component';
import { FaqComponent } from '../../common/@base/faq/faq.component';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
  host: { 'collision-id': 'FaqPageComponent' },
  imports: [SubscribeComponent, FaqComponent],
})
export class FaqPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
