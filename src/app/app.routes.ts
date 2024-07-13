import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/auth/register-page/register-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { HotelsComponent } from './components/common/@base/hotels/hotels.component';
import { ListHotelsComponent } from './components/pages/hotels/list-hotels/list-hotels.component';
import { HotelDetailComponent } from './components/pages/hotels/hotel-detail/hotel-detail.component';
import { BookingPageComponent } from './components/pages/booking-page/booking-page.component';
import { FlightDetailComponent } from './components/pages/flight/flight-detail/flight-detail.component';
import { ListFlightsComponent } from './components/pages/flight/list-flights/list-flights.component';
import { ResetPasswordComponent } from './components/pages/auth/reset-password/reset-password.component';
import { ConfirmSuccessComponent } from './components/pages/auth/confirm-success/confirm-success.component';
import { ForgetPasswordComponent } from './components/pages/auth/forget-password/forget-password.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // auth
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'confirm-success', component: ConfirmSuccessComponent },

  //auth
  { path: 'contact', component: ContactPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
  { path: 'terms-conditions', component: TermsConditionsPageComponent },

  // =================================
  // { path: '**', component: NotFoundComponent },
  {path:'hotels-listing', component: ListHotelsComponent},
  {path:'booking-page', component: BookingPageComponent},
  {path:'flights-listing', component: ListFlightsComponent},
  // chua co id o route
  {path:'hotel-details', component: HotelDetailComponent},
  {path:'flight-details', component: FlightDetailComponent},
  
  
];
