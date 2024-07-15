import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-success',
  standalone: true,
  imports: [],
  templateUrl: './confirm-success.component.html',
  styleUrl: './confirm-success.component.scss'
})
export class ConfirmSuccessComponent {
  message:string | undefined
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.message = navigation?.extras.state?.['message'];
  }

  navigateToLogin() {
    this.router.navigate(['/login']); // Điều hướng về trang đăng nhập sau khi xác nhận
  }
}
