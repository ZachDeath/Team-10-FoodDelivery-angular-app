import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Payment } from '../shared/paymentConstructor';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private apiUrl = 'http://localhost:8090/payment';
  private userPayment:Payment;
  constructor(private http: HttpClient) { }

  //return payment using userid
  getPayment(id: number): Observable<any> {
    const url = `${this.apiUrl}/find-payment/user-id/${id}`;
    console.log("in payment");
    return this.http
      .get(url)
      .pipe();
  }

  getUserPayment(): Payment{
      return this.userPayment;
  }

  setUserPayment(pay: Payment): void{
      this.userPayment=pay;
  }

  updatePayment(pay: Payment): Observable<any> {
    const url = `${this.apiUrl}payment/find-payment/update-payment/${pay.user_id}`;
    console.log("in payment");
    return this.http
      .post(url, pay)
      .pipe();
  }


}