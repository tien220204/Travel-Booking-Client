import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { lastValueFrom, Observable } from 'rxjs';

import { enviroment } from '../Enviroments/Enviroment';

import { LoginDTO } from '../DTO/LoginDto.DTO';
import { RegisterDTO } from '../DTO/registerDTO.dto';
import { EmailDTO } from '../DTO/EmailDto.DTO';
import { resetPasswordDTO } from '../DTO/resetPasswordDTO.DTO';
import { BookingHotelDto } from '../DTO/BookingHotelDto.Dto';
import { BookingFlightDto } from '../DTO/BookingFlightDto.Dto';
import { BookingTourDto } from '../DTO/BookingTourDto.Dto';
@Injectable({
    providedIn: 'root',
})
export class BookingTourApiService {
    httpClient = inject(HttpClient);
    baseUrl = enviroment.baseApiUrl;

    constructor(private http: HttpClient) { }
   

    async UserInfo() {
        const token = localStorage.getItem("token");

        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        try {
            const response = await lastValueFrom(
                this.httpClient.get(this.baseUrl + 'Account/getUserInfo', { headers })
            );
            return response;
        } catch (error) {
            console.error('Error fetching user info:', error);
            throw error;
        }
    }

    async TourInfo(id: string) {
        return lastValueFrom(
            this.httpClient.get(this.baseUrl + 'Tour/getTourDetail/' + id)
        );
    }

    getPercent(code: string) {
        return lastValueFrom(
            this.httpClient.get<number>(this.baseUrl + 'Discount/getPercent?code=' + code)
        );
    }

    async addBill(booking : BookingTourDto) {
        const token = localStorage.getItem("token");

        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        return lastValueFrom(
            this.httpClient.post(this.baseUrl + 'Booking/addBookingTour/', booking, {headers})
        );
    }

}
