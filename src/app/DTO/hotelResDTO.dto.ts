import { facilitiesDTO } from "./facilitiesDTO.dto"

export interface hotelResDto {
    hotelId : number;
    hotelName : string;
    hotelDescription : string;
    hotelPriceRange : string;
    hotelLocation : string;
    locationId : string;
    isHide : string;
    countReview : number,
    totalStar : number,
    star : number
    facilities : facilitiesDTO[];
    photoUrl : string;
}