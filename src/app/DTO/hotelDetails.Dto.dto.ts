import { hotelResDto } from "./hotelResDTO.dto"
import { PhotoDto } from "./photoDto.dto"
import { reviewDto } from "./reviewDto.dto"
import { RoomDto } from "./RoomDto.Dto"

export interface detailHotelDto {
    hotel : hotelResDto
    photos : PhotoDto[]
    listReview : reviewDto[]
    count : number
    userFullName : string
    star: number, 
    rooms: RoomDto[]
}