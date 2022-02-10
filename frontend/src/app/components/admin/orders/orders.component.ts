import { Component, OnInit, ViewChild } from '@angular/core';
import {  MatTable, MatTableModule } from '@angular/material/table';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/orderConstructor';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  columnsToDisplay = [
    'id',
    'user_id',
    'employee_id',
    'order_date'
  ];

  @ViewChild(MatTable) table: MatTable<Order>;

  constructor(private oService: OrderService) { 
    this.orders = [];
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.oService.getAllOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }

  /* deleteOrder(id: number) {
    let text = 'Are you sure you want to delete this order?';
    if (confirm(text) == true) {
      const orderDeleted = this.orders.findIndex(
        (element) => element.employee_id == id
      );
      console.log(orderDeleted);
      this.oService.deleteOrder(id).subscribe();
      this.orders.splice(orderDeleted, 1);
      this.table.renderRows();
    }
  } */

}
