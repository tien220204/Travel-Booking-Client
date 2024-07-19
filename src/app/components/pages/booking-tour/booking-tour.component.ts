import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, viewChild } from '@angular/core';
import { SubscribeComponent } from '../../common/@base/subscribe/subscribe.component';
import { BookingBarComponent } from '../../common/@base/booking-bar/booking-bar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DpDatePickerModule } from 'ng2-date-picker';
import { CommonModule, isPlatformBrowser, NgClass } from '@angular/common';
import { ICreateOrderRequest, IPayPalConfig, NgxPayPalModule } from 'ngx-paypal';
import { FormsModule } from '@angular/forms';
import { BookingHotelApiService } from '../../../services/BookingHotel.service';
import { infoDTO } from '../../../DTO/infoDTO.dto';
import { RoomDto } from '../../../DTO/RoomDto.Dto';
import { BookingHotelDto } from '../../../DTO/BookingHotelDto.Dto';
import { BookingFlightApiService } from '../../../services/BookingFlight.service';
import { FlightDTO } from '../../../DTO/FlightDto.DTO';
import { BookingFlightDto } from '../../../DTO/BookingFlightDto.Dto';
import { TourDto } from '../../../DTO/tourDto.Dto';
import { BookingTourApiService } from '../../../services/BookingTour.service';
import { BookingTourDto } from '../../../DTO/BookingTourDto.Dto';



@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [
    NgClass,
    CommonModule,
    SubscribeComponent,
    BookingBarComponent,
    DpDatePickerModule,
    NgxPayPalModule, 
    FormsModule
  ],
  templateUrl: './booking-tour.component.html',
  styleUrl: './booking-tour.component.scss'
})
export class BookingTourComponent {
  isHidden: boolean = true;

  
  hotelId : number = 0;
  
  roomId : number = 0;

  checkIn : string = '';
  checkOut: string = '';
  numOfAdult : number = 0;
  numOfChil : number = 0;
  daysDiff : number = 1;
  totalGuest: number = 0;

  discountCode : string = 'nodiscount';
  percent : number = 0;

  SubTotal: number = 0;
  Tax: number = 0;
  total : number = 0;

  totalUSD : number=0;

  userInfo : infoDTO | null = null;
  roomInfo : RoomDto | null = null;
  hotelName: string = '';

  booking: BookingTourDto | null = null;

  public payPalConfig?: IPayPalConfig;
  //flight
  flightId: number = 0;
  numOfPass : number = 0;

  flightDTO : FlightDTO | null = null;

  //tour
  tourId : string = '';
  tourDto : TourDto | null = null;
  numOfPeo = 0;
  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object, 
    private route: ActivatedRoute, 
    private bookingHotelApiService : BookingHotelApiService, 
    private bookingFlightApiService : BookingFlightApiService, 
    private bookingTourApiService : BookingTourApiService
  ) { }


  ngOnInit(): void {
    if(!this.checkLogin()){
      alert('You need to log in before do this action');
      this.router.navigate(['/login']);
    }
    
    this.route.queryParams.subscribe(params => {
      this.tourId = params['tourId'];
    
      console.log('tourId:', this.tourId);
      this.getTourInfo();
    });
    
  }

  async getDiscountPer(){
    try {
      const res = await this.bookingTourApiService.getPercent(this.discountCode);
      this.percent = res;
      if (this.percent === 0) {
        this.discountCode = 'nodiscount';
      }
      console.log(this.percent);
    } catch (err) {
      console.error('Error getting discount percent:', err);
      throw err; 
    }

  }

  getUserInfo(){
    this.bookingTourApiService.UserInfo().then(
      (res) => {
        console.log(res);
        this.userInfo = res as infoDTO;
      },
      err => {
        console.log(err);
      }
    )

  }


  checkLogin(): boolean {
    return localStorage.getItem("token") !== null
  }
  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
    if(window!==null){
      this.initConfig();
    }else{
      console.log("null");
    }
    this.totalUSD = Math.round((this.total / 25325) * 100) / 100;
    console.log(this.totalUSD);
  }

  bookNow(){
    this.getUserInfo();
    this.calculateTotal();
    this.isHidden = false;
  }

  getTourInfo(){
    this.bookingTourApiService.TourInfo(this.tourId).then(
      (res) => {
        console.log(res);
        
        this.tourDto = res as TourDto;
      },
      err => {
        console.log(err);
      }
    )
  }
  async calculateTotal(){
    await this.getDiscountPer();
    
    if(this.tourDto !== null){
      this.SubTotal = this.tourDto.tourPrice * this.numOfPeo;
      this.Tax = this.SubTotal * 0.1;
      const per = this.percent/100;

      const discountMoney = (this.SubTotal + this.Tax) * per;

      this.total = (this.SubTotal + this.Tax) - discountMoney;
 
    }
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'ATNWR3xy6waw8jNkOFTmG2YIJoiSQ6VdGZdQIz0RucL2CmHyQCIOlqECtLwZ5nBgu2Yqw5u8DkTdoTBv',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: this.totalUSD+'',
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: this.totalUSD+''
                }
              }
            },
            items: [
              // {
              //   name: 'Enterprise Subscription',
              //   quantity: '1',
              //   category: 'DIGITAL_GOODS',
              //   unit_amount: {
              //     currency_code: 'EUR',
              //     value: '100',
              //   },
              // }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          
          if(this.tourDto!==null){
            this.booking = {
              tourid :  Number.parseInt(this.tourId),
              tourprice: this.tourDto.tourPrice,
              numofpeo: this.numOfPeo,
              subtotal: this.SubTotal,
              tax: this.Tax,
              code: this.discountCode,
              percent: this.percent,
              total: this.total
            };
           
              this.bookingTourApiService.addBill(this.booking).then(
                (res) => {
                  console.log(res);
                  alert("Congratulations, your transaction was successful");
                  this.router.navigate(['/']);
                  
                },
                err => {
                  console.log(err);
                }
              )
          
          }
          
          
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);

      },
      onCancel: (data, actions) => {
        alert("You have closed this transaction");
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}


