import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

import { AccountAPIService } from '../../../../services/AccountApi.Service';
import { JsonResponseDTO } from '../../../../DTO/JsonResponeDTO.DTO';
@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './active.component.html',
  host: { 'collision-id': 'TopHeaderComponent' },
})
export class ActiveComponent implements OnInit {
  token: string = '';
  message:string | undefined
  loading = false;

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.token = params.get('token')!;
    //   console.log('Token from URL:', this.token);

    //   //code dang loi
    //   this.accountAPIService.activeAccount(this.token).then(
    //     (res) => {
    //       // console.log(res);
    //       console.log(res);
    //     }, 
    //     err => {
    //       console.log(err);
    //     }
    //   )
    // });
    
  }
  constructor(private router: Router,
    private route: ActivatedRoute,
    private accountAPIService: AccountAPIService,
  ) {
    
  }

  navigateToLogin() {
    this.router.navigate(['/login']); // Điều hướng về trang đăng nhập sau khi xác nhận
  }
  register(){
    this.route.paramMap.subscribe(params => {
      this.token = params.get('token')!;
      console.log('Token from URL:', this.token);

      //code dang loi
      this.accountAPIService.activeAccount(this.token).then(
        (res) => {
          let result: JsonResponseDTO = res as JsonResponseDTO;
          console.log(result.code);
          console.log(result);
          if (result.code == 200) {
            this.router.navigate(["/confirm-success"], { state: { message: result.msg } });
          } else {
            alert('An unexpected response code was received.');
          }
          this.loading = false; 
        }
      ).catch((err) => {
        console.error(err);
        if (err.error) {
          let result: JsonResponseDTO = err.error as JsonResponseDTO;
          alert(result.msg);
        } else {
          alert('An unexpected error occurred.');
        }
        this.loading = false; 
      });
    });
  }
  }
  

 

