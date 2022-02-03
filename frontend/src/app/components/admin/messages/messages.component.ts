import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/shared/messageConstructor';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[];
  term: string;
  columnsToDisplay = [
    'message_id',
    'user_id',
    'first_name',
    'last_name',
    'email_address',
    'message',
  ];

  @ViewChild(MatTable) table: MatTable<Message>;

  constructor(private messageService: MessageService) {
    this.messages= [];
   }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.messageService.getAllMessages().subscribe((messages: Message[]) => {
      this.messages = messages;
    });
  }

}
