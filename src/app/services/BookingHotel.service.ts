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
export class BookingHotelApiService {
    httpClient = inject(HttpClient);
    baseUrl = enviroment.baseApiUrl;

    constructor(private http: HttpClient) { }
    async getHotelName(id: number) {
        return lastValueFrom(
            this.httpClient.get<{ name: string }>(this.baseUrl + 'Hotel/findNameHotel/' + id)
        );
    }

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

    async getRoomInfo(id: number) {
        return lastValueFrom(
            this.httpClient.get(this.baseUrl + 'Hotel/Room-Info/' + id)
        );
    }

    getPercent(code: string) {
        return lastValueFrom(
            this.httpClient.get<number>(this.baseUrl + 'Discount/getPercent?code=' + code)
        );
    }

}
