import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkIsLogin(): boolean {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      return localStorage.getItem('token') !== null;
    }
    return false;
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    alert("Log Out Successfully");
    window.location.reload(); 
  }
}
