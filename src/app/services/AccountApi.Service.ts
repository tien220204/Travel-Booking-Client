import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { lastValueFrom, Observable } from 'rxjs';

import { enviroment } from '../Enviroments/Enviroment';

import { LoginDTO } from '../DTO/LoginDto.DTO';
import { RegisterDTO } from '../DTO/registerDTO.dto';
import { EmailDTO } from '../DTO/EmailDto.DTO';
import { resetPasswordDTO } from '../DTO/resetPasswordDTO.DTO';
@Injectable({
  providedIn: 'root',
})
export class AccountAPIService {
  httpClient = inject(HttpClient);
  baseUrl = enviroment.baseApiUrl + 'Account';

  constructor(private http: HttpClient) { }

  async register(account: RegisterDTO) {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/Register', account)
    );
  }
  async login(account: LoginDTO) {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/Login', account)
    );
  }
  async findByUsername(username: string) {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/findByUsername/' + username)
    );
  }

  async getFullName(email: string) {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/getFullName/' + email)
    );
  }

  async sendEmail(email: string) {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/ForgetPassword', JSON.stringify(email), { headers })
    );
  }



  async activeAccount(token: string) {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/Verify-Your-Account/' + token, {})
    );

  }

  async resetPassword (password: resetPasswordDTO) {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/ResetPassword', password)
    );
  }

}
