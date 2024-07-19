import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router, RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TourApiService } from '../../../../services/TourApi.service';
import { TourDto } from '../../../../DTO/tourDto.Dto';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { BookingBarComponent } from '../booking-bar/booking-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CarouselModule, SubscribeComponent,
    BookingBarComponent,
    RouterLink, FormsModule, 
    
   
    CommonModule  , 
   
    ],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  host: { 'collision-id': 'DestinationsComponent' },
  providers: [DecimalPipe]
})
export class DestinationsComponent implements OnInit {
  constructor(public router: Router, private tourApiService: TourApiService) {}
  listTour : TourDto[] | null = null;
  ngOnInit(): void {this.loadListTour()}

  destinationsSlides: OwlOptions = {
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
  loadListTour(){
    this.tourApiService.getAllTour().then(
      (res) => {
        // console.log(res);
        this.listTour = res as TourDto[];
        
        
      }, 
      err => {
        console.log(err);
      }
    )
  }

}
