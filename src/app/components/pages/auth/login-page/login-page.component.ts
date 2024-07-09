import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginDTO } from '../../../../DTO/LoginDto.DTO';
import { AccountAPIService } from '../../../../services/AccountApi.Service';
import { JsonResponseDTO } from '../../../../DTO/JsonResponeDTO.DTO';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  host: { 'collision-id': 'LoginPageComponent' },
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private accountApiService: AccountAPIService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
      
    })
  }
  login() {
    let account: LoginDTO = this.loginForm.value as LoginDTO;
    console.log(account);

    this.accountApiService.login(account).then(
      (res) => {
        let result: JsonResponseDTO = res as JsonResponseDTO;
        console.log(result.code);
        if (result.code === 200) {
          localStorage.setItem('username', account.email);
          this.router.navigate(['transfer']);
          alert(result.msg);
        } 
      }
    ).catch((err) => {
      // Xử lý lỗi ở đây
      console.error(err);
      if (err.error) {
        let result: JsonResponseDTO = err.error as JsonResponseDTO;
        console.log(result.msg);
        alert(result.msg);
      } else {
        alert('An unexpected error occurred.');
      }
    });
  }
}
