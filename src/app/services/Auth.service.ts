import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkIsLogin(): boolean {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      console.log("??");
      return localStorage.getItem('token') !== null;
    }
    console.log("!!")
    return false;
    // const token = localStorage.getItem('token');
    // return !!token;
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    alert("Log Out Successfully");
    window.location.reload(); 
  }
}
