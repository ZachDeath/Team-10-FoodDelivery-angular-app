import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { PostsService } from 'src/app/services/post.service';
<<<<<<< Updated upstream
import { Registereduser } from 'src/app/shared/registeredUser.model';
=======
import { UserService } from 'src/app/services/user.service';
import { HeaderColorService } from 'src/app/services/header-color.service';
import { Registereduser } from 'src/app/shared/registeredUser.model';
import { User } from 'src/app/shared/userConstructor';
import { HeaderComponent } from '../header/header.component';
import { AdminFormComponent } from '../admin-form/admin-form.component';
>>>>>>> Stashed changes

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;
  color = '#2657dc';
  @Output() messageEvent = new EventEmitter<String>();


<<<<<<< Updated upstream
  constructor(private router: Router, private postsService: PostsService) { }

=======
  user: Registereduser = { email: "", password: "" };

  constructor(private router: Router, private postsService: PostsService, private userService: UserService,
    private hService:HeaderColorService) { 
    
  }

  users: User;
  loginFailed: boolean;

  sendMessage() {
    console.log("message sent")
    this.messageEvent.emit(this.color);
  }


>>>>>>> Stashed changes
  ngOnInit(): void {
    
  }

  changeHeader(): void {
    //this.color = '#2657dc';
    //this.hService.changeColor(this.color);
    //this.HeaderComponent.color = this.color;
    console.log("Admin page")

    
  }

  onSubmit() {

    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    //console.log(this.loginForm.value.email);
    this.clearForm();

<<<<<<< Updated upstream
    this.postsService.sendLoginData(this.user);
    
    
=======
    this.userService.getUserByEmail(this.user.email, this.user.password).subscribe((users: User) => {
      this.users = users;

      if (this.users == null) {
        this.loginFailed = true;
      }
      else {
        this.loginFailed = false;
        this.userService.userLoggedIn();
        console.log(this.users)
        console.log(users)
        this.userService.updateLoggeduser(this.users);
        this.router.navigate(['/'])
      }
    });



    //this.postsService.sendLoginData(this.user);


>>>>>>> Stashed changes
    //this.checkLoginDetails();

  }

  routeToHome() {

    this.router.navigate(['/home']);

  }

  clearForm() {

    this.loginForm.form.reset();

  }



}
