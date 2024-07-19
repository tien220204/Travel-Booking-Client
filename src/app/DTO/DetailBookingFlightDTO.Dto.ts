

export interface DetailBookingFlight {
    flightInvoiceId : number
    bookingId: number,
    flightPrice: number,
    numOfPassengers: number,
    subTotal: number,
    tax: number,
    discountCode: string,
    discountPercent: number,
    total: number
   
}