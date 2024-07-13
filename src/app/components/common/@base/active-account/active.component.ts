import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { AuthService } from '../../../../services/Auth.service';
import { AccountAPIService } from '../../../../services/AccountApi.Service';
@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './active.component.html',
  host: { 'collision-id': 'TopHeaderComponent' },
})
export class ActiveComponent implements OnInit {
  token: string = '';
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private accountAPIService: AccountAPIService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.token = params.get('token')!;
      console.log('Token from URL:', this.token);

      //code dang loi
      this.accountAPIService.activeAccount(this.token).then(
        (res) => {
          // console.log(res);
          console.log(res);
        }, 
        err => {
          console.log(err);
        }
      )
    });
  }

 
}
