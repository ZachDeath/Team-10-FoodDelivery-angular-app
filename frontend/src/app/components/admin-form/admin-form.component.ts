import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { PostsService } from 'src/app/services/post.service';
import { Employee } from 'src/app/shared/employeeConstructor';
import { registeredEmployee } from 'src/app/shared/registeredEmployee.model';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  @ViewChild('adminForm') adminForm: NgForm;
  
  color: String = '#2657dc';

  @Output() messageEvent = new EventEmitter<String>();

  employee: registeredEmployee = { email: "", password: "" };
  adminPage: boolean;


  constructor(private router: Router, private postsService: PostsService,
    private employeeService: EmployeeService) { 
      
    }
  ngOnInit(){
    
  }
  
  sendMessage() {
    console.log("message sent from admin")
    this.messageEvent.emit(this.color);
  }

  employees: Employee;
  loginFailed: boolean;
  

  changeHeaderColor(): boolean {
    return this.adminPage;
  }

  onSubmit() {

    this.employee.email = this.adminForm.value.email;
    this.employee.password = this.adminForm.value.password;
    //console.log(this.loginForm.value.email);
    this.adminForm.form.reset();

    this.employeeService.getEmployeeByEmail(this.employee.email, this.employee.password).subscribe((employees: Employee) => {
      this.employees = employees;

      if (this.employees == null) {
        this.loginFailed = true;
      }
      else {
        this.loginFailed = false;
        this.employeeService.employeeLoggedIn();
        console.log(this.employees)
        console.log(employees)
        this.employeeService.updateLoggedEmployee(this.employees);
        this.router.navigate(['/'])
      }
    });

  }

  routeToHome() {

    this.router.navigate(['/home']);

  }

}
