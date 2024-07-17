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
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.scss'
})
export class BookingPageComponent {
  isHidden: boolean = true;
  datePickerConfig = {
    format: 'YYYY-MM-DD'
  };
  hotelId : number = 0;
  
  roomId : number = 0;

  checkIn : string = '';
  checkOut: string = '';
  numOfAdult : number = 0;
  numOfChil : number = 0;
  daysDiff : number = 1;
  totalGuest: number = 0;

  discountCode : string = 'NoDiscount';
  percent : number = 0;

  SubTotal: number = 0;
  Tax: number = 0;
  total : number = 0;

  totalUSD : number=0;

  userInfo : infoDTO | null = null;
  roomInfo : RoomDto | null = null;
  hotelName: string = '';
  public payPalConfig?: IPayPalConfig;

  ngOnInit(): void {
    
    // this.initConfig();
    this.route.queryParams.subscribe(params => {
      this.hotelId = params['hotelId'];
      this.roomId = params['roomId'];
      console.log('Hotel ID:', this.hotelId);
      console.log('Room ID:', this.roomId);
    });
    this.getRoomInfo();
    this.getHotelName();
  }

  async getDiscountPer(){
    try {
      const res = await this.bookingHotelApiService.getPercent(this.discountCode);
      this.percent = res;
      if (this.percent === 0) {
        this.discountCode = 'NoDiscount';
      }
      console.log(this.percent);
    } catch (err) {
      console.error('Error getting discount percent:', err);
      throw err; 
    }

  }

  getUserInfo(){
    this.bookingHotelApiService.UserInfo().then(
      (res) => {
        console.log(res);
        this.userInfo = res as infoDTO;
      },
      err => {
        console.log(err);
      }
    )

  }

  getHotelName(){
    this.bookingHotelApiService.getHotelName(this.hotelId).then(
      (res) => {
        
        this.hotelName =res.name;
        
      },
      err => {
        console.log(err);
      }
    )

  }

  getRoomInfo(){
    this.bookingHotelApiService.getRoomInfo(this.roomId).then(
      (res) => {
        console.log(res);
        this.roomInfo = res as RoomDto;
      },
      err => {
        console.log(err);
      }
    )

  }

  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object, 
    private route: ActivatedRoute, 
    private bookingHotelApiService : BookingHotelApiService
  ) { }

  // ngOnInit(): void {
  //   // if(!this.checkLogin()){
  //   //   alert('You need to log in before do this action');
  //   //   this.router.navigate(['/login']);
  //   // }
  
  // }


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
    this.totalUSD = Math.round((this.total / 25325) * 100) / 100;;
    console.log(this.totalUSD);
  }

  bookNow(){
    if(!this.checkIn && !this.checkOut){
      alert("Check In and Check Out can not empty")
      return;
    }
    this.getUserInfo();
    const checkOutDate = new Date(this.checkOut);
    const checkInDate = new Date(this.checkIn);
    const millisecondsDiff = checkOutDate.getTime() - checkInDate.getTime();
    this.daysDiff = millisecondsDiff / (1000 * 60 * 60 * 24);
    if(this.daysDiff <= 0){
      alert("Please choose the correct check in and check out dates");
      this.daysDiff=1;
      this.checkOut = this.checkIn;
      return;
    }

    if(Number.isNaN(this.daysDiff)){
      this.daysDiff=1;
    }
    console.log('day diff:', this.daysDiff);
    this.totalGuest = this.numOfAdult + this.numOfChil;
    console.log('Guest:', this.totalGuest);

    if(this.roomInfo!==null){
      if(this.totalGuest>this.roomInfo?.maxPerInRoom){
        alert("Exceeded the specified number of people")
        this.numOfAdult=0;
        this.numOfChil=0;
        return;
      }
    }
    
    

    this.calculateTotal();
    this.isHidden = false;
  }

  async  calculateTotal(){
    await  this.getDiscountPer();
    if(this.roomInfo!==null){
      this.SubTotal = this.roomInfo.roomPrice * this.daysDiff
      console.log("subtotal" , this.SubTotal);
      this.Tax = this.SubTotal * 0.1;
      console.log("tax" , this.Tax);
      console.log("before / 100", this.percent)
      const per = this.percent/100;
      console.log("per" , per);

      const discountMoney = (this.SubTotal + this.Tax) * per;
      console.log("discountMoney" , discountMoney);
      this.total = (this.SubTotal + this.Tax) - discountMoney;
      console.log("total" , this.total);
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
          alert("Congratulations, your transaction was successful");
          this.router.navigate(['/']);
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


