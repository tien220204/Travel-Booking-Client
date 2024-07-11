import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterDTO } from '../../../../DTO/registerDTO.dto';
import { Router } from '@angular/router';
import { AccountAPIService } from '../../../../services/AccountApi.Service';
import { JsonResponseDTO } from '../../../../DTO/JsonResponeDTO.DTO';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  host: { 'collision-id': 'RegisterPageComponent' },
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
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
    let account: RegisterDTO = this.registerForm.value as RegisterDTO;
    console.log(account)
    

    this.accountApiService.register(account).then(
      (res) => {
        let result: JsonResponseDTO = res as JsonResponseDTO;
        console.log(result.code);
        console.log(result);
        if (result.code == 200) {
          alert(result.msg);
        } 
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
    });
}
}
