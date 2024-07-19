import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';

import { enviroment } from '../Enviroments/Enviroment';

import { LoginDTO } from '../DTO/LoginDto.DTO';
@Injectable({
  providedIn: 'root',
})
export class TourApiService {
  httpClient = inject(HttpClient);
  baseUrl = enviroment.baseApiUrl + 'Tour';
  async getAllTour() {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/getAllTour')
    );
  }
  
  async getTourDetail(id : string) {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/getTourDetail/'+id)
    );
  }
}