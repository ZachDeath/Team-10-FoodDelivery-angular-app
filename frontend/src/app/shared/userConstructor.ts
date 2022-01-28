// app/core/course.model.ts
import { Injectable } from '@angular/core';
import { Adapter } from '../services/adapter';

export class User {
  constructor(
    public user_id: number,
    public first_name: String,
    public last_name: String,
    public email_address: String,
    public date_of_birth: Date,
    public phone_number: String,
    public password: String
  ) {}
}

@Injectable({
  providedIn: 'root',
})

export class UserAdapter implements Adapter<User> {
  adapt(item: any): User {
    return new User(item.user_id, item.first_name, item.last_name, item.email_address, item.date_of_birth, item.phone_number, item.password)
  }
}
