import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';
import { Employee } from 'src/app/shared/employeeConstructor';
import { User } from 'src/app/shared/userConstructor';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  loggedUser: User;
  loggedAdmin: Employee;

  imagePath = "./assets/images/pizzabackground.jpg";
  

  constructor(private userService: UserService, private eService: EmployeeService) { 
    console.log("Banner Loaded")
    console.log(window.location.pathname)
    this.loggedUser=this.userService.userObj;

    this.userService.loggedUser.subscribe((user: User)=>{
      this.userService.userObj=user;
      this.loggedUser=user;
    });
      this.loggedAdmin=this.eService.employeeObj;

    this.eService.loggedEmployee.subscribe((employee: Employee)=>{
      this.eService.employeeObj=employee;
      this.loggedAdmin=employee; });

  
  }

  ngOnInit(): void {
    if(this.loggedAdmin!=undefined || this.loggedAdmin!=null) {
      this.imagePath = './assets/images/pizzaAlt.jpg';
    }

    if(this.loggedUser!=undefined || this.loggedUser!=null) {
      this.imagePath = './assets/images/pizzabackground.jpg';
    }
    
    
    


  }

}
