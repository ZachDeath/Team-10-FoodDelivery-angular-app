import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;

  user = {
    email: "",
    password: ""
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.user.email=this.loginForm.value.email;
    this.user.password=this.loginForm.value.email;
    console.log(this.user.email);
    this.clearForm();
    
    
    //this.checkLoginDetails();
    
  }

  routeToHome(){

    this.router.navigate(['/home']);

  }

  clearForm(){

    this.loginForm.form.reset();
    
  }

  

}
