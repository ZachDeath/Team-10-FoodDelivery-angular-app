import { Injectable, Optional } from '@angular/core';
import { Adapter } from '../services/adapter';
export class CreateOrder {
  constructor(
    public id: number,
    public user_id: number,
    public employee_id: number,
    public order_date: number,
  ) {}
}
@Injectable({
  providedIn: 'root',
})
export class CreateOrderAdapter implements Adapter<CreateOrder> {
  adapt(item: any): CreateOrder {
    return new CreateOrder(
      item.id,
      item.user_id,
      item.employee_id,
      item.order_date,
    );
  }
}