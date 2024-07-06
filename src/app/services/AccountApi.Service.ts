import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';

import { enviroment } from '../Enviroments/Enviroment';

import { LoginDTO } from '../DTO/LoginDto.DTO';
@Injectable({
  providedIn: 'root',
})
export class AccountAPIService {
  httpClient = inject(HttpClient);
  baseUrl = enviroment.baseApiUrl + 'Account';
  // async register(account: AccountDTO) {
  //   return lastValueFrom(
  //     this.httpClient.post(this.baseUrl + '/Register', account)
  //   );
  // }
  async login(account: LoginDTO) {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/Login', account)
    );
  }
  async findByUsername(username: string) {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/findByUsername/'+username)
    );
  }
  
}
