import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';

import { enviroment } from '../Enviroments/Enviroment';

import { LoginDTO } from '../DTO/LoginDto.DTO';
import { reviewDto } from '../DTO/reviewDto.dto';
@Injectable({
  providedIn: 'root',
})
export class HotelApiService {
  httpClient = inject(HttpClient);
  baseUrl = enviroment.baseApiUrl + 'Hotel';
  async getPaginedHotel(params: any) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key]) {
        httpParams = httpParams.append(key, params[key]);
      }
    });
    console.log("service",{ params: httpParams });
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/HotelsPaginated',{ params: httpParams })
    );
  }
  
  async getHotelDetail(id : string) {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/Hotel-Details/'+id)
    );
  }

  async addReview(reviewdto: reviewDto) {
    const token = localStorage.getItem("token");

        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
    return lastValueFrom(
      this.httpClient.post(enviroment.baseApiUrl + 'Review/addReview/', reviewdto, {headers})
    );
  }
}