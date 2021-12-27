import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  @ViewChild('registrationForm') loginForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    //this.user.email=this.loginForm.value.email;
    //this.user.password=this.loginForm.value.email;

    //this.clearForm();
    
    
    //this.checkLoginDetails();
    
  }

}
