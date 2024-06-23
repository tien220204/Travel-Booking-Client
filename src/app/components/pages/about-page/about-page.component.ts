import { Component, OnInit } from '@angular/core';
import { FeaturesComponent } from '../../common/@base/features/features.component';
import { WhyChooseUsComponent } from '../../common/@base/why-choose-us/why-choose-us.component';
import { FeedbackComponent } from '../../common/@base/feedback/feedback.component';
import { SubscribeComponent } from '../../common/@base/subscribe/subscribe.component';
import { AboutComponent } from '../../common/@base/about/about.component';
import { TeamComponent } from '../../common/@base/team/team.component';
import { CustomerSupportComponent } from '../../common/@base/customer-support/customer-support.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  host: { 'collision-id': 'AboutPageComponent' },
  imports: [
    FeaturesComponent,
    WhyChooseUsComponent,
    FeedbackComponent,
    SubscribeComponent,
    AboutComponent,
    TeamComponent,
    CustomerSupportComponent,
  ],
})
export class AboutPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
