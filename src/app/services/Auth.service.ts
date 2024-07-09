import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkIsLogin(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    alert("Log Out Successfully");
    window.location.reload(); 
  }
}
