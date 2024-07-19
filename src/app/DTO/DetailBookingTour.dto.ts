export interface DetailBookingTour {
    tourInvoiceId: number,
            bookingId: number,
            tourPrice: number,
            numOfPeople: number,
            subTotal: number,
            tax: number,
            discountCode: string,
            discountPercent: number,
            total: number
   
}