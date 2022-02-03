// 
import { Injectable } from '@angular/core';
import { Adapter } from '../services/adapter';

export class Message {
  constructor(
    public message_id: number,
    public email_address: string,
    public first_name: string,
    public last_name: string,
    public message: string,
    public user_id: number,
  ) {}
}

@Injectable({
  providedIn: 'root',
})

export class MessageAdapter implements Adapter<Message> {
  adapt(item: any): Message {
    return new Message(item.message_id, item.email_address,item.first_name, item.last_name, item.message,item.user_id);
  }
}
