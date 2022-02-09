import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/post.service';
import { Employee } from 'src/app/shared/employeeConstructor';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('newAdminForm') newAdminForm: NgForm;

  employee: Employee = {
    employee_id: null,
    first_name: null,
    last_name: null,
    email_address: null,
    date_of_birth: null,
    phone_number: null,
    password: null,
  };

  postEmployee: Employee = {
    employee_id: null,
    first_name: null,
    last_name: null,
    email_address: null,
    date_of_birth: null,
    phone_number: null,
    password: null,
  };

  passwordCheck: string;

  constructor(private postsService: PostsService) {
    console.log('New Employee Form Loaded');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.employee.first_name = this.newAdminForm.value.firstName;
    this.employee.last_name = this.newAdminForm.value.lastName;
    this.employee.email_address = this.newAdminForm.value.email;
    this.employee.date_of_birth = this.newAdminForm.value.birthDate;
    this.employee.phone_number = this.newAdminForm.value.mobile.toString();
    this.employee.password = this.newAdminForm.value.password;
    this.passwordCheck = this.newAdminForm.value.rePassword;

    if (this.checkLoginDetails() == 1) {
      this.postEmployee.first_name = this.newAdminForm.value.firstName;
      this.postEmployee.last_name = this.newAdminForm.value.lastName;
      this.postEmployee.email_address = this.newAdminForm.value.email;
      this.postEmployee.date_of_birth = this.newAdminForm.value.birthDate;
      this.postEmployee.phone_number = this.newAdminForm.value.mobile.toString();
      this.postEmployee.password = this.newAdminForm.value.password;

      console.log(this.postEmployee);

      this.postsService.createEmployee(this.postEmployee);
      this.newAdminForm.form.reset();
    }

  }

  checkLoginDetails() {
    let count = 0;
    let response = 'Errors:';

    if (this.employee.password == this.passwordCheck) {
      console.log('Passwords match: ' + this.employee.password);
      count++;
    } else {
      console.log('Passwords do not match: ' + this.employee.password);
      response += '\n-Passwords do not match';
    }

    return count;
  }

}
