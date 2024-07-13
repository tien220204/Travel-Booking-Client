import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit{
  resetPassForm!: FormGroup
  

  constructor(
    private formBuilder: FormBuilder,
    // private accountApiService: AccountAPIService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.resetPassForm = this.formBuilder.group({
      
    });
  }
  resetPass(){
    
  }
}
