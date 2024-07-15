import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterDTO } from '../../../../DTO/registerDTO.dto';
import { Router } from '@angular/router';
import { AccountAPIService } from '../../../../services/AccountApi.Service';
import { JsonResponseDTO } from '../../../../DTO/JsonResponeDTO.DTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  host: { 'collision-id': 'RegisterPageComponent' },
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private accountApiService: AccountAPIService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname: '',
      email: '',
      password: '',
      phoneNumber: '',
      gender: true
    });
  }
  register() {
    this.loading = true;
    let account: RegisterDTO = this.registerForm.value as RegisterDTO;
    console.log(account)
    

    this.accountApiService.register(account).then(
      (res) => {
        let result: JsonResponseDTO = res as JsonResponseDTO;
        console.log(result.code);
        console.log(result);
        if (result.code == 200) {
          this.router.navigate(["/confirm-success"], { state: { message: result.msg } });
        } 
        this.loading = false; 
      }
    ).catch((err) => {
      // Xử lý lỗi ở đây
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
