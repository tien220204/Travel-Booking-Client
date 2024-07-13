import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailDTO } from '../../../../DTO/EmailDto.DTO';
import { AccountAPIService } from '../../../../services/AccountApi.Service';
import { JsonResponseDTO } from '../../../../DTO/JsonResponeDTO.DTO';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})

export class ForgetPasswordComponent {
  emailForm!: FormGroup
  

  constructor(
    private formBuilder: FormBuilder,
    private accountApiService: AccountAPIService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: 'phamtienorion@gmail.com'
    });
  }
  emailCheck(){
   
    let email:string  = this.emailForm.get('email')?.value ;
    console.log(email)
    

    this.accountApiService.sendEmail(email).then(
      (res) => {
        let result: JsonResponseDTO = res as JsonResponseDTO;
        console.log(result.code);
        console.log(result);
        if (result.code == 200) {
          alert(result.msg);
          this.router.navigate(["/confirm-success"])
        } 
      }
    ).catch((err) => {
      
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