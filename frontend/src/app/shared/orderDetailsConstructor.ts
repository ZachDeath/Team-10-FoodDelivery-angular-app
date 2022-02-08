// app/core/course.model.ts
import { Injectable } from '@angular/core';
import { Adapter } from '../services/adapter';

export class OrderDetails {
  constructor(
    public order_id: number,
    public food_id: number,
    public quanity: number
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsAdapter implements Adapter<OrderDetails> {
  adapt(item: any): OrderDetails {
    return new OrderDetails(item.id, item.menu, item.quantity);
  }
}
