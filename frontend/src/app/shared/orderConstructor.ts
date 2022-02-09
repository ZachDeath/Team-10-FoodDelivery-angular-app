import { Injectable } from '@angular/core';

import { Adapter } from '../services/adapter';

import { menuItem } from './menuItem.model';

export class Order {
  constructor(
    public id: number,

    public user_id: number,

    public employee_id: number,

    public order_date: number,

    public items: menuItem[]
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class OrderAdapter implements Adapter<Order> {
  adapt(item: any): Order {
    return new Order(
      item.id,
      item.user_id,
      item.employee_id,
      item.order_date,
      item.items
    );
  }
}
