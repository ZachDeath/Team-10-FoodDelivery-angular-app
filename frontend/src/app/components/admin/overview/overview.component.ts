import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { MessageService } from 'src/app/services/message.service';
import { OrderService } from 'src/app/services/order.service';
import { OrderDetailsService } from 'src/app/services/orderDetails.service';
import { UserService } from 'src/app/services/user.service';
import { Employee } from 'src/app/shared/employeeConstructor';
import { Message } from 'src/app/shared/messageConstructor';
import { Order } from 'src/app/shared/orderConstructor';
import { User } from 'src/app/shared/userConstructor';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  users: User[];
  messages: Message[];
  orders: Order[];
  price: number;
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
    this.loggedAdmin = this.eService.employeeObj;
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
    this.messageService.getAllMessages().subscribe((messages: Message[]) => {
      this.messages = messages;
    });
    this.orderService.getAllOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }
}
