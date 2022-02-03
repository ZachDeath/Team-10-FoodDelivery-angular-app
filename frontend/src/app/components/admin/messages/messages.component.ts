import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
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
    'delete'
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

  deleteMessage(id: number) {
    let text = 'Are you sure you want to delete this message?';
    if (confirm(text) == true) {
      const messageDeleted = this.messages.findIndex(
        (element) => element.message_id == id
      );
      console.log(messageDeleted);
      this.messageService.deleteMessage(id).subscribe();
      this.messages.splice(messageDeleted, 1);
      this.table.renderRows();
    }
  }

}
