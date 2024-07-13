import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';

import { enviroment } from '../Enviroments/Enviroment';

import { LoginDTO } from '../DTO/LoginDto.DTO';
@Injectable({
  providedIn: 'root',
})
export class HotelApiService {
  httpClient = inject(HttpClient);
  baseUrl = enviroment.baseApiUrl + 'Hotel';
  async getPaginedHotel(pageNumber : number) {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/HotelsPaginated?PageNumber='+pageNumber)
    );
  }

  async getHotelDetail(id : string) {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/Hotel-Details/'+id)
    );
  }
}