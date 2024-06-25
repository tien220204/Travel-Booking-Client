import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { TopHeaderComponent } from './components/common/@base/top-header/top-header.component';
import { FooterComponent } from './components/common/@base/footer/footer.component';
import { NavbarComponent } from './components/common/@base/navbar/navbar.component';
import { filter } from 'rxjs';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopHeaderComponent,
    FooterComponent,
    NavbarComponent,
    NgxScrollTopModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  location: any;
  routerSubscription: any;
  title: any;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.recallJsFuntions();
  }

  recallJsFuntions() {
    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationEnd || event instanceof NavigationCancel
        )
      )
      .subscribe((event) => {
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0);
        }
      });
  }
}
