import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/services/basket.service';
import { UserService } from 'src/app/services/user.service';
import { Registereduser } from 'src/app/shared/registeredUser.model';
import { User } from 'src/app/shared/userConstructor';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;

  user: Registereduser = {email:"", password:""};

  constructor(private router: Router, private userService: UserService, private basketService: BasketService) { }

  users: User;
  loginFailed: boolean;
  
  
  ngOnInit(): void {
  }

  onSubmit(){

    this.user.email=this.loginForm.value.email;
    this.user.password=this.loginForm.value.password;
    //console.log(this.loginForm.value.email);
    this.clearForm();

    this.userService.getUserByEmail(this.user.email, this.user.password).subscribe((users: User) => {
      this.users = users;
      
      if (this.users==null){
        this.loginFailed=true;
      }
      else{
        this.loginFailed=false;
        this.userService.userLoggedIn();
        console.log(this.users)
        console.log(users)
        this.userService.updateLoggeduser(this.users);
        this.basketService.getBasketFromDatabase(users.user_id);
        this.router.navigate(['/'])
      }
    });
  }


  clearForm(){

    this.loginForm.form.reset();
    
  }

  

}
