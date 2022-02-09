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
    employee_id:null,
    first_name: null,
    last_name: null,
    email_address: null,
    date_of_birth: null,
    phone_number: null,
    password: null,
  };

  constructor(private postsService: PostsService) {
    console.log('New Employee Form Loaded');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
