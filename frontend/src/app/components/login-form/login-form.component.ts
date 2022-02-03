import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/post.service';
import { Registereduser } from 'src/app/shared/registeredUser.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;

  user: Registereduser = {email:"", password:""};

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.user.email=this.loginForm.value.email;
    this.user.password=this.loginForm.value.password;
    //console.log(this.loginForm.value.email);
    this.clearForm();

    //this.postsService.sendLoginData(this.user);
    
    
    //this.checkLoginDetails();
    
  }

  routeToHome(){

    this.router.navigate(['/home']);

  }

  clearForm(){

    this.loginForm.form.reset();
    
  }

  

}
