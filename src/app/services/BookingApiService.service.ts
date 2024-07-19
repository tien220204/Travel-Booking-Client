import { inject, Injectable } from "@angular/core";
import { enviroment } from "../Enviroments/Enviroment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class BookingApiService {
    httpClient = inject(HttpClient);
    baseUrl = enviroment.baseApiUrl;

    constructor(private http: HttpClient) { }
   

    async allBooking() {
        const token = localStorage.getItem("token");

        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        try {
            const response = await lastValueFrom(
                this.httpClient.get(this.baseUrl + 'Booking/getAllBooking', { headers })
            );
            return response;
        } catch (error) {
            console.error('Error fetching user info:', error);
            throw error;
        }
    }

   

}
