import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-properties',
  imports: [NgClass, CarouselModule, RouterLink],
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
  host: { 'collision-id': 'PropertiesComponent' },
})
export class PropertiesComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  propertiesSlides: OwlOptions = {
    nav: true,
    loop: true,
    margin: 25,
    dots: false,
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
        items: 2,
      },
      695: {
        items: 3,
      },
      935: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  };
}
