import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CarouselModule, NgClass],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  host: { 'collision-id': 'FeedbackComponent' },
})
export class FeedbackComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  feedbackSlides: OwlOptions = {
    loop: true,
    margin: 25,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      "<i class='ri-arrow-left-line'></i>",
      "<i class='ri-arrow-right-line'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      515: {
        items: 1,
      },
      695: {
        items: 2,
      },
      935: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };
}
