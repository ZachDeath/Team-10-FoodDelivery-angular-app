import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { MessageService } from 'src/app/services/message.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Employee } from 'src/app/shared/employeeConstructor';
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
  loggedAdmin: Employee;
  orders: Order[];
  

  constructor(private userService: UserService, private messageService: MessageService,
    private eService: EmployeeService, private oService: OrderService) {
    this.users = [];
    this.messages = [];
    this.orders = [];
    this.loggedAdmin=this.eService.employeeObj;
  }

  ngOnInit(): void {
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
}
