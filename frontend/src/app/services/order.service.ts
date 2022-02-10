import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateOrder } from '../shared/createOrderConstructor';
import { Order, OrderAdapter } from '../shared/orderConstructor';
import { BasketService } from './basket.service';
import { OrderDetailsService } from './orderDetails.service';
@Injectable({ providedIn: 'root' })
export class OrderService {
  private apiUrl = 'http://localhost:8090/api/order';
  constructor(
    private http: HttpClient,
    private adapter: OrderAdapter,
    private orderDetailsService: OrderDetailsService,
    private basketService: BasketService
  ) { }
  //Gets every order stored in the table
  getAllOrders(): Observable<Order[]> {
    const url = `${this.apiUrl}/getAllOrders`;
    return this.http
      .get(url)
      .pipe(map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
  }
  //Gets every order under a paticular ID in the table
  getOrdersByUserID(id: number): Observable<Order[]> {
    const url = `${this.apiUrl}/getOrderByUser/${id}`;
    return this.http
      .get(url)
      .pipe(map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
  }
  //Gets every order under a paticular ID in the table
  createNewOrder(id: number, e_id: number): void {
    const url = `${this.apiUrl}/createOrder/${id}`;
    let temp = new CreateOrder(null, id, e_id, null);
    this.http
      .post(url, temp)
      .pipe()
      .subscribe((order: CreateOrder) => {
        for (let i = 0; i < this.basketService.itemsInBasket.length; i++) {
          this.orderDetailsService.createNewOrderDetails(
            order.id,
            this.basketService.itemsInBasket[i].food_id,
            this.basketService.itemsInBasket[i].quantity
          );
        }
        this.basketService.itemsInBasket = [];
        this.basketService.itemsChanged.emit(
          this.basketService.itemsInBasket.slice()
        );
      });
  }
}