export interface DetailBookingHotel {
    hotelInvoiceId: number,
            bookingId: number,
            roomId: number,
            roomPrice: number,
            checkinDate: string,
            checkoutDate: string,
            numOfAdults: number,
            numOfChildren: number,
            numOfDays: number,
            subTotal: number,
            tax: number,
            discountCode: string,
            discountPercent: number,
            total: number
   
}