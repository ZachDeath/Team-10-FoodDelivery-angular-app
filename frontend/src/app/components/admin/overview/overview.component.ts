import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { MessageService } from 'src/app/services/message.service';
import { OrderService } from 'src/app/services/order.service';
import { OrderDetailsService } from 'src/app/services/orderDetails.service';
import { UserService } from 'src/app/services/user.service';
import { Employee } from 'src/app/shared/employeeConstructor';
import { menuItem } from 'src/app/shared/menuItem.model';
import { Message } from 'src/app/shared/messageConstructor';
import { Order } from 'src/app/shared/orderConstructor';
import { User } from 'src/app/shared/userConstructor';
import { MenuComponent } from '../../menus/menu.component';
import { MenuService } from 'src/app/services/menu.service';
import { OrderDetails } from 'src/app/shared/orderDetailsConstructor';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  users: User[];
  messages: Message[];
  orders: Order[];
  employees: Employee[];
  price: number;
  totalPrice: number;
  loggedAdmin: Employee;
  
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
    this.employees = [];
    this.loggedAdmin = this.eService.employeeObj;
    this.totalPrice=0;

  }

  ngOnInit(): void {
    this.reloadData();
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
    this.messageService.getAllMessages().subscribe((messages: Message[]) => {
      this.messages = messages;
    });
    this.orderService.getAllOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
    });
    this.eService.getAllEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
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


