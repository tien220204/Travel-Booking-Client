import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, viewChild } from '@angular/core';
import { SubscribeComponent } from '../../common/@base/subscribe/subscribe.component';
import { BookingBarComponent } from '../../common/@base/booking-bar/booking-bar.component';
import { Router } from '@angular/router';
import { DpDatePickerModule } from 'ng2-date-picker';
import { CommonModule, isPlatformBrowser, NgClass } from '@angular/common';



@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [
    NgClass, 
    CommonModule,
    SubscribeComponent,
    BookingBarComponent, 
    DpDatePickerModule
  ],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.scss'
})
export class BookingPageComponent implements AfterViewInit{
  datePickerConfig = {
    format: 'YYYY-MM-DD'
  };

  @ViewChild('paymentRef', {static : true }) paymentRef! : ElementRef;
  constructor(private router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // ngOnInit(): void {
  //   // if(!this.checkLogin()){
  //   //   alert('You need to log in before do this action');
  //   //   this.router.navigate(['/login']);
  //   // }
  //   window.paypal.Buttons().render(this.paymentRef.nativeElement);
  // }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Check if paymentRef and nativeElement are defined
      if (window.paypal && this.paymentRef && this.paymentRef.nativeElement) {
        // Ensure PayPal SDK is loaded and initialized
        window.paypal.Buttons().render(this.paymentRef.nativeElement)
          .then(() => {
            console.log('PayPal Buttons rendered successfully.');
          })
          
      } else {
        console.error('paymentRef or nativeElement is undefined');
      }
    }
  }

  checkLogin():boolean{
    return localStorage.getItem("token") !==null
  }
  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
  }
}
