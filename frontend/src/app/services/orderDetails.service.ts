import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EventEmitter, Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import {
  OrderDetails,
  OrderDetailsAdapter,
} from '../shared/orderDetailsConstructor';

@Injectable({ providedIn: 'root' })
export class OrderDetailsService {
  private apiUrl = 'http://localhost:8090/api/orderDetails';

  constructor(private http: HttpClient, private adapter: OrderDetailsAdapter) {}

  //Gets every order under a paticular ID in the table

  getOrderDetails(id: number): Observable<any> {
    const url = `${this.apiUrl}/getOrderDetails/${id}`;

    return this.http

      .get(url)

      .pipe();
  }
}
