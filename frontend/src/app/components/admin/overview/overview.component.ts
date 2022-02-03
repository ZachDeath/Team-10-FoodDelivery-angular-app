import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
import { Message } from 'src/app/shared/messageConstructor';
import { User } from 'src/app/shared/userConstructor';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  users: User[];
  messages: Message[];

  constructor(private userService: UserService, private messageService: MessageService) {
    this.users = [];
    this.messages = [];
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
    this.messageService.getAllMessages().subscribe((messages: Message[]) => {
      this.messages = messages;
    });
  }
}
