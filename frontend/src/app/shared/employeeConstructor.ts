// app/core/course.model.ts
import { Injectable } from '@angular/core';
import { Adapter } from '../services/adapter';

export class Employee {
  constructor(
    public employee_id: number,
    public first_name: string,
    public last_name: string,
    public email_address: string,
    public date_of_birth: Date,
    public phone_number: string,
    public password: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})

export class EmployeeAdapter implements Adapter<Employee> {
  adapt(item: any): Employee {
    return new Employee(item.employee_id, item.first_name, item.last_name, item.email_address, item.date_of_birth, item.phone_number, item.password)
  }
}
