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

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // auth
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  //auth
  { path: 'contact', component: ContactPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
  { path: 'terms-conditions', component: TermsConditionsPageComponent },

  // =================================
  { path: '**', component: NotFoundComponent },
];
