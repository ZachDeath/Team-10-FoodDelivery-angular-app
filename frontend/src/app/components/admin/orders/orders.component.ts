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
<<<<<<< Updated upstream
=======
  orders: Order[];
  ordersDetails: OrderDetails[];
  term: string;
  price: number;
  total = 0;

>>>>>>> Stashed changes

  orders: Order[];
  columnsToDisplay = [
    'id',
    'user_id',
    'employee_id',
    'order_date'
  ];

  @ViewChild(MatTable) table: MatTable<Order>;

<<<<<<< Updated upstream
  constructor(private oService: OrderService) { 
    this.orders = [];
  }
=======
  constructor(
    private orderService: OrderService,
    private orderDetailsService: OrderDetailsService
  ) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.reloadData();
  }
<<<<<<< Updated upstream
=======
  reloadData() {

    console.log(
      this.orderService

        .getAllOrders()

        .subscribe((orders) => {
          this.orders = orders;


          console.log('orders^^');

          for (let i = 0; i < this.orders.length; i++) {
            console.log(i);

            this.getOrderDetails(orders[i].id, i);
            this.getFinalPrice(orders[i].id, i);

            //let temp: menuItem[] = this.getOrderDetails(orders[i].id);

            console.log('orders with details:');

            console.log(this.orders);
          }
        })
    );
  }

  getOrderDetails(id: number, index: number) {
    this.orderDetailsService.getOrderDetails(id).subscribe((ordersDetails) => {
      let tempItem: menuItem;
      let tempArray: menuItem[] = [];

      for (let i = 0; i < ordersDetails.length; i++) {
        tempItem = ordersDetails[i];

        tempArray.push(tempItem);
      }
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
=======
        this.price = tempArray.reduce((a, b) => a + b, 0);
      }
      // console.log(tempArray);
      this.orders[index].finalPrice = this.price;

    });
  }
>>>>>>> Stashed changes
}
