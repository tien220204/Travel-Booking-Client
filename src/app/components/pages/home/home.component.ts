import { Component, OnInit } from '@angular/core';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { FeaturesComponent } from '../../common/@base/features/features.component';
import { DestinationsComponent } from '../../common/@base/destinations/destinations.component';
import { WhyChooseUsComponent } from '../../common/@base/why-choose-us/why-choose-us.component';
import { PropertiesComponent } from '../../common/@base/properties/properties.component';
import { HotelsComponent } from '../../common/@base/hotels/hotels.component';
import { FeedbackComponent } from '../../common/@base/feedback/feedback.component';
import { HowItWorksComponent } from '../../common/@base/how-it-works/how-it-works.component';
import { SubscribeComponent } from '../../common/@base/subscribe/subscribe.component';

@Component({
  selector: 'app-home-demo-one',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    HomeBannerComponent,
    FeaturesComponent,
    DestinationsComponent,
    WhyChooseUsComponent,
    PropertiesComponent,
    HotelsComponent,
    FeedbackComponent,
    HowItWorksComponent,
    SubscribeComponent,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
