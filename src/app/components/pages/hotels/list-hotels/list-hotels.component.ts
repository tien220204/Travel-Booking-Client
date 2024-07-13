import { Component, OnInit } from '@angular/core';

import { BookingBarComponent } from '../../../common/@base/booking-bar/booking-bar.component';
import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HotelApiService } from '../../../../services/HotelApi.service';
import { listHotelDto } from '../../../../DTO/listHotelDto.dto';

@Component({
  selector: 'app-list-hotels',
  standalone: true,
  imports: [
    SubscribeComponent,
    BookingBarComponent,
    RouterLink
  ],
  templateUrl: './list-hotels.component.html',
  styleUrl: './list-hotels.component.scss'
})
export class ListHotelsComponent implements OnInit  {
  page: number = 1;
  pageSize: number = 8;
  totalPages: number = 0;
  totalItems: number = 0;
  listHotelDto : listHotelDto | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelApiService: HotelApiService
  ){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.page = params['page'] ? + params['page'] : 1;
      this.loadHotels();
      console.log("page",this.page);
    });

    
  }

  loadHotels() {
    this.hotelApiService.getPaginedHotel(this.page).then(
      (res) => {
        // console.log(res);
        this.listHotelDto = res as listHotelDto;
        console.log(this.listHotelDto);
        this.totalPages = this.listHotelDto.totalPages;
        this.totalItems = this.listHotelDto.totalItem;
      }, 
      err => {
        console.log(err);
      }
    )
  }

  onPageChange(newPage: number){
    console.log(newPage)
    if (newPage > 0 && newPage <= this.totalPages) {
      this.page = newPage;
      this.router.navigate(['/hotels-listing'], { queryParams: { page: this.page } });
      this.loadHotels();
    }
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

}
