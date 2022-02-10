<<<<<<< Updated upstream
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
=======
import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
>>>>>>> Stashed changes
import { EmployeeService } from 'src/app/services/employee.service';
import { MessageService } from 'src/app/services/message.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Employee } from 'src/app/shared/employeeConstructor';
import { menuItem } from 'src/app/shared/menuItem.model';
import { Message } from 'src/app/shared/messageConstructor';
import { User } from 'src/app/shared/userConstructor';
import { Order } from 'src/app/shared/orderConstructor';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  users: User[];
  messages: Message[];
<<<<<<< Updated upstream
=======
  orders: Order[];
  price: number;
  totalPrice: number;
>>>>>>> Stashed changes
  loggedAdmin: Employee;
  orders: Order[];
  
<<<<<<< Updated upstream

  constructor(private userService: UserService, private messageService: MessageService,
    private eService: EmployeeService, private oService: OrderService) {
    this.users = [];
    this.messages = [];
    this.orders = [];
    this.loggedAdmin=this.eService.employeeObj;
=======
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private orderService: OrderService,
    private orderDetailsService: OrderDetailsService,
    private eService: EmployeeService
  ) {
    this.users = [];
    this.messages = [];
    this.orders = [];
    this.loggedAdmin = this.eService.employeeObj;
    this.totalPrice=0;

>>>>>>> Stashed changes
  }

  ngOnInit(): void {
    this.reloadData();
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
    this.messageService.getAllMessages().subscribe((messages: Message[]) => {
      this.messages = messages;
    });
    this.oService.getAllOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
    });
    
  }

  getFinalPrice(id: number, index: number) {
    this.orderDetailsService.getOrderDetails(id).subscribe((ordersDetails) => {
      let tempItem: number;
      let tempArray: number[] = [];
      let quantity: number;

      for (let i = 0; i < ordersDetails.length; i++) {
        tempItem = ordersDetails[i].menu.unitprice;
        quantity = ordersDetails[i].quantity;

        tempArray.push(tempItem * quantity);

        this.price = tempArray.reduce((a, b) => a + b, 0);
      }
      // console.log(tempArray);
      this.orders[index].finalPrice = this.price;

      //if (this.orderService.timesLoaded == 0) {
      this.totalPrice += Math.floor(this.price);
      //}
    });
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

  reloadData() {

    console.log(
      this.orderService.getAllOrders().subscribe((orders) => {
          this.orders = orders;
          for (let i = 0; i < this.orders.length; i++) {
            this.getOrderDetails(orders[i].id, i);
            this.getFinalPrice(orders[i].id, i);
            //let temp: menuItem[] = this.getOrderDetails(orders[i].id);

          }
        })
    );
  }
}


