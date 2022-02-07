// app/core/course.model.ts
import { Injectable } from '@angular/core';
import { Adapter } from '../services/adapter';

export class Address {
  constructor(
    public user_id: number,
    public first_name: string,
    public last_name: string,
    public first_line: string,
    public second_line: Date,
    public city: string,
    public state: string,
    public post_code: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})

export class AddressAdapter implements Adapter<Address> {
  adapt(item: any): Address {
    return new Address(item.user_id, item.first_name, item.last_name, item.first_line, item.second_line, item.city, item.state, item.post_code)
  }
}
