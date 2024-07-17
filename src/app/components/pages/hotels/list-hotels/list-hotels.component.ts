import { Component, OnInit } from '@angular/core';

import { BookingBarComponent } from '../../../common/@base/booking-bar/booking-bar.component';
import { SubscribeComponent } from '../../../common/@base/subscribe/subscribe.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HotelApiService } from '../../../../services/HotelApi.service';
import { listHotelDto } from '../../../../DTO/listHotelDto.dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-hotels',
  standalone: true,
  imports: [
    SubscribeComponent,
    BookingBarComponent,
    RouterLink, FormsModule
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
  

  hotelName: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelApiService: HotelApiService
  ){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.page = params['page'] ? + params['page'] : 1;
      this.hotelName = params['hotelName'] ?  params['hotelName'] : '';
      
      this.loadHotels(this.page, this.hotelName);
      console.log("page",this.page);
    });

    
  }

  loadHotels(page: number, hotelName: string) {
    const queryParams: any = {};

    if (this.page) queryParams.page = this.page;
    if (this.hotelName) queryParams.hotelName = this.hotelName;
    this.hotelApiService.getPaginedHotel(queryParams).then(
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

  onPageChange(newPage: number, page: number, hotelName: string){
    console.log('new page',newPage)
    const queryParams: any = {};
    if (this.page) queryParams.page = newPage;
    if (this.hotelName) queryParams.hotelName = this.hotelName;

    if (newPage > 0 && newPage <= this.totalPages) {
      this.page = newPage;
      this.router.navigate(['/hotels-listing'], { queryParams });
      this.loadHotels(page, hotelName);
    }
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onSubmit(){
    console.log("ok")
    const queryParams: any = {};
    if (this.page) queryParams.page = this.page;
    if (this.hotelName) queryParams.hotelName = this.hotelName;
    this.router.navigate(['/hotels-listing'], { queryParams });
  }
}
