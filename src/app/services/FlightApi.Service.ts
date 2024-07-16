import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  async getAllFlight() {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/getAllFlight')
    );
  }
  

}
