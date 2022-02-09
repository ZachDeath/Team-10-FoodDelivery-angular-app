import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order, OrderAdapter } from '../shared/orderConstructor';


@Injectable({ providedIn: 'root' })
export class OrderService {
  private apiUrl = 'http://localhost:8090/api/order';

  constructor(private http: HttpClient, private adapter:OrderAdapter) {}

  //Gets every order stored in the table
  getAllOrders(): Observable<Order[]> {
    const url = `${this.apiUrl}/getAllOrders`;
    return this.http
      .get(url)
      .pipe(map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
  }

  //Gets every order under a paticular ID in the table
  getOrdersByUserID(id:number): Observable<Order[]> {
    const url = `${this.apiUrl}/getOrderByUser/${id}`;
    return this.http
      .get(url)
      .pipe(map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
  }

}