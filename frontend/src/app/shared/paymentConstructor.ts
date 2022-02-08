export class Payment {
    constructor(
      public user_id: number,
      public payment_type: number,
      public long_card_number: string,
      public vcc: string,
      public expiry_month: string,
      public expiry_year: string
      
    ) {}
  }