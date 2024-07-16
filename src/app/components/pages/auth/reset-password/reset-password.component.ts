import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountAPIService } from '../../../../services/AccountApi.Service';
import { JsonResponseDTO } from '../../../../DTO/JsonResponeDTO.DTO';
import { resetPasswordDTO } from '../../../../DTO/resetPasswordDTO.DTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit{
  resetPassForm!: FormGroup
  loading = false;
  token :string|null =null;
  

  constructor(
    private formBuilder: FormBuilder,
    private accountApiService: AccountAPIService,
    private router: Router,
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    this.resetPassForm = this.formBuilder.group({
      
      password: '',
      retyped_password:''
    });
  }
  resetPass(){
    this.loading = true;
    let password: string = this.resetPassForm.get('password')?.value;
    let retyped_password: string = this.resetPassForm.get('retyped_password')?.value;
    if(password != retyped_password){
      alert('2 mật khẩu không khớp');
    }else{
      let newPassword: resetPasswordDTO = {
        token: this.token,
        newPassword: password
      };
      console.log(newPassword);
      
      this.accountApiService.resetPassword(newPassword).then(
        (res) => {
          let result: JsonResponseDTO = res as JsonResponseDTO;
          console.log(result.code);
          console.log(result);
          if (result.code == 200) {
            alert(result.msg);
            this.router.navigate(["/login"] );
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
    }
  }
}
