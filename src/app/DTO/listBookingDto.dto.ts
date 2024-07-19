import { DetailBookingFlight } from "./DetailBookingFlightDTO.Dto"
import { DetailBookingHotel } from "./DetailBookingHotel.Dto"
import { DetailBookingTour } from "./DetailBookingTour.dto"

export interface listBookingDTO {
    listDetailBookingFlight : DetailBookingFlight[]
    listDetailBookingHotel : DetailBookingHotel[]
    listDetailBookingTour : DetailBookingTour[]
   
}