import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { lastValueFrom, Observable } from 'rxjs';

import { enviroment } from '../Enviroments/Enviroment';


@Injectable({
  providedIn: 'root',
})
export class FlightApiService {
  httpClient = inject(HttpClient);
  baseUrl = enviroment.baseApiUrl + 'Flight';

  constructor(private http: HttpClient) { }
  async getAllFlight(params: any) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key]) {
        httpParams = httpParams.append(key, params[key]);
      }
    });
    console.log("service",{ params: httpParams });
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/getAllFlight', { params: httpParams })
    );
  }

  async getFlightById(id:string) {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/getFlightById/'+id)
    );
  }
  
  async getAllAirport() {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/getAllAirport')
    );
  }

}
