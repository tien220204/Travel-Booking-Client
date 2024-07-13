import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { AuthService } from '../../../../services/Auth.service';
import { AccountAPIService } from '../../../../services/AccountApi.Service';
@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
  host: { 'collision-id': 'TopHeaderComponent' },
})
export class TopHeaderComponent implements OnInit {
  //check login
  isLoggedIn: boolean = false;
  fullName: string = '';
  email: string = '';
  constructor(public router: Router,
    public authService: AuthService,
    private accountApiService: AccountAPIService,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.checkIsLogin();
    let storedEmail: string | null = null;
    if (typeof localStorage !== 'undefined') {
      storedEmail = localStorage.getItem('email');
    }

    this.email = storedEmail ? storedEmail : '';

    if (this.isLoggedIn) {
      this.accountApiService.getFullName(this.email).then(
        (res) => {
          this.fullName = (res as { result: string }).result;
        },
        (err) => {
          console.log(err);
        }
      );
    }
    
    console.log(this.isLoggedIn);
  }

  logout() {
    this.authService.logOut();
  }
}
