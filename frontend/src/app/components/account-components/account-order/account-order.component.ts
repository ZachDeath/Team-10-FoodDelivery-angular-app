import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { OrderService } from 'src/app/services/order.service';
import { OrderDetailsService } from 'src/app/services/orderDetails.service';
import { UserService } from 'src/app/services/user.service';
import { menuItem } from 'src/app/shared/menuItem.model';
import { Order } from 'src/app/shared/orderConstructor';
import { OrderDetails } from 'src/app/shared/orderDetailsConstructor';
import { User } from 'src/app/shared/userConstructor';

@Component({
  selector: 'app-account-order',
  templateUrl: './account-order.component.html',
  styleUrls: ['./account-order.component.css'],
})
export class AccountOrderComponent implements OnInit {
  orders: Order[];
  ordersDetails: OrderDetails[];
  term: string;
  loggedUser: User;
  price: number;

  columnsToDisplay = [
    'id',
    'employee_id',
    'order_date',
    'order_details',
    'price',
  ];
  @ViewChild(MatTable) table: MatTable<Order>;

  constructor(
    private orderService: OrderService,
    private userService: UserService,
    private orderDetailsService: OrderDetailsService
  ) {
    this.loggedUser = userService.userObj;

    this.userService.loggedUser.subscribe((user: User) => {
      userService.userObj = user;

      this.loggedUser = user;
    });
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    console.log(
      this.orderService

        .getOrdersByUserID(this.loggedUser.user_id)

        .subscribe((orders) => {
          this.orders = orders;

          console.log(orders);

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

      this.orders[index].items = tempArray;
    });
  }

  getFinalPrice(id: number, index: number) {
    this.orderDetailsService.getOrderDetails(id).subscribe((ordersDetails) => {
      let tempItem: number;
      let tempArray: number[] = [];
      let quantity: number 

      for (let i = 0; i < ordersDetails.length; i++) {
        tempItem = ordersDetails[i].menu.unitprice;
        quantity = ordersDetails[i].quantity
        console.log(quantity);
        
        tempArray.push(tempItem * quantity);
       
        

        this.price =
          tempArray.reduce((a, b) => a + b, 0) 
          
      }
      // console.log(tempArray);
      this.orders[index].finalPrice = this.price;
    });
  }
}
