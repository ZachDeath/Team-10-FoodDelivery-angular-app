import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { PostsService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { Registereduser } from 'src/app/shared/registeredUser.model';
import { User } from 'src/app/shared/userConstructor';
import { HeaderComponent } from '../header/header.component';
import { AdminFormComponent } from '../admin-form/admin-form.component';
import { BasketService } from 'src/app/services/basket.service';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  

  @ViewChild('loginForm') loginForm: NgForm;
  color = '#2657dc';
  @Output() messageEvent = new EventEmitter<String>();


  user: Registereduser = { email: "", password: "" };

  constructor(private router: Router,private basketService: BasketService, private userService: UserService,
    private eService: EmployeeService) { 
      this.eService.atAdminPage = false;
    
  }

  users: User;
  loginFailed: boolean;

  sendMessage() {
    console.log("message sent")
    this.messageEvent.emit(this.color);
  }


  
  
  ngOnInit(): void {
    
  }

  changeHeader(): void {
    this.eService.atAdminPage = true;
    console.log("Admin page")
    
  }

  onSubmit() {

    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    //console.log(this.loginForm.value.email);
    this.clearForm();

    this.userService.getUserByEmailAndPassword(this.user.email, this.user.password).subscribe((users: User) => {
      this.users = users;

      if (this.users == null) {
        this.loginFailed = true;
      }
      else {
        this.loginFailed = false;
        this.userService.userLoggedIn();
        this.userService.updateLoggeduser(this.users);
        this.basketService.getBasketFromDatabase(this.users.user_id);
        this.basketService.deleteBasketItems(this.users.user_id);
        this.router.navigate(['/'])
      }
    });



    //this.postsService.sendLoginData(this.user);


    //this.checkLoginDetails();

  }
  clearForm() {

    this.loginForm.form.reset();

  }



}
