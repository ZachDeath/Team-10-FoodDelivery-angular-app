import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('registrationForm') registrationForm: NgForm;

  user = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
    rePassword: "",


  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user.firstName = this.registrationForm.value.firstName;
    this.user.lastName = this.registrationForm.value.lastName;
    this.user.email = this.registrationForm.value.email;
    this.user.dob = this.registrationForm.value.birthDate;
    this.user.gender = this.registrationForm.value.gender;
    this.user.password = this.registrationForm.value.password;
    this.user.rePassword = this.registrationForm.value.rePassword;
    console.log(this.user.rePassword);

    //this.checkLoginDetails();

    this.registrationForm.form.reset();

  }

  checkLoginDetails() {
    
  }

}
