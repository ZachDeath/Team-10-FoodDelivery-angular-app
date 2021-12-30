import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/post.service';
import { Registereduser } from 'src/app/shared/registeredUser.model';
import { UserDetails } from 'src/app/shared/userDetails.model';

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
    mobile: "",
    gender: "",
    password: "",
    rePassword: "",


  }

  userSubmitted: UserDetails = 
  {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    mobile: "",
    gender: "",
    password: ""}

  emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)| (".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  nameReg = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
  phoneNoReg = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);

  constructor(private postsService: PostsService) {
    console.log("Registration Page Loaded")
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user.firstName = this.registrationForm.value.firstName;
    this.user.lastName = this.registrationForm.value.lastName;
    this.user.email = this.registrationForm.value.email;
    this.user.dob = this.registrationForm.value.birthDate;
    this.user.mobile = (this.registrationForm.value.mobile).toString();
    this.user.gender = this.registrationForm.value.gender;
    this.user.password = this.registrationForm.value.password;
    this.user.rePassword = this.registrationForm.value.rePassword;

    console.log(this.user);


    if (this.checkLoginDetails() == 5) {
      this.registrationForm.form.reset()

      this.userSubmitted.firstName = this.registrationForm.value.firstName;
      this.userSubmitted.lastName = this.registrationForm.value.lastName;
      this.userSubmitted.email = this.registrationForm.value.email;
      this.userSubmitted.dob = this.registrationForm.value.birthDate;
      this.userSubmitted.mobile = (this.registrationForm.value.mobile);
      this.userSubmitted.gender = this.registrationForm.value.gender;
      this.userSubmitted.password = this.registrationForm.value.password;

      this.postsService.submiteUsersDetails(this.userSubmitted);
    }

  }

  checkLoginDetails() {
    let count = 0;
    let response = "Errors:";

    if (this.emailReg.test(this.user.email)) {
      console.log("Email is valid: " + this.user.email);
      count++;
    } else { console.log("Email is invalid: " + this.user.email); 
    response+= "\n-Invalid email format";}

    if (this.nameReg.test(this.user.firstName)) {
      console.log("First name valid: " + this.user.firstName);
      count++;
    } else { console.log("First name invalid: " + this.user.firstName); 
    response+= "\n-Invalid first name format";}

    if (this.nameReg.test(this.user.lastName)) {
      console.log("Last name valid: " + this.user.lastName);
      count++;
    } else { console.log("Last name invalid: " + this.user.lastName); 
    response+= "\n-Invalid last name format";}

    if (this.phoneNoReg.test(this.user.mobile)) {
      console.log("Phone number is valid: " + this.user.mobile);
      count++;
    } else { console.log("Phone number is invalid: " + this.user.mobile); 
    response+= "\n-Invalid phone number format";}

    if (this.user.password == this.user.rePassword) {
      console.log("Passwords match: " + this.user.password);
      count++;
    } else {
      console.log("Passwords do not match: " + this.user.password);
      response+= "\n-Passwords do not match";
    }

    console.log("Correct count: " + count + "/5");
    if (count != 5) {alert(response);}
    return count;
  }

}
