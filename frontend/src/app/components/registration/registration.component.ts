import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/userConstructor';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  @ViewChild('registrationForm') registrationForm: NgForm;

  user: User = {
    user_id:null,
    first_name: null,
    last_name: null,
    email_address: null,
    date_of_birth: null,
    phone_number: null,
    password: null,
  };
  passwordCheck: string;

  userSubmitted: User = {
    user_id: null,
    first_name: null,
    last_name: null,
    email_address: null,
    date_of_birth: null,
    phone_number: null,
    password: null,
  };

  emailReg = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)| (".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  nameReg = new RegExp(
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  );
  phoneNoReg = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  );

  constructor(private postsService: PostsService, private userService: UserService) {
    console.log('Registration Page Loaded');
  }

  ngOnInit(): void {}

  // Need to fix regex so that form only allows local and uk(+44) phone numbers to be entered
  onSubmit() {
    this.user.first_name = this.registrationForm.value.firstName;
    this.user.last_name = this.registrationForm.value.lastName;
    this.user.email_address = this.registrationForm.value.email;
    this.user.date_of_birth = this.registrationForm.value.birthDate;
    this.user.phone_number = this.registrationForm.value.mobile.toString();
    this.user.password = this.registrationForm.value.password;
    this.passwordCheck = this.registrationForm.value.rePassword;

    console.log(this.user);

    let userExist: User;
    this.userService.getUserByemail(this.user.email_address).subscribe((user:User)=>{
      userExist=user;

      if (userExist!=null){
        alert("User Email already Exists!")
        
      }
      else{

        if (this.checkLoginDetails() == 5&&user==null) {
          this.userSubmitted.first_name = this.registrationForm.value.firstName;
          this.userSubmitted.last_name = this.registrationForm.value.lastName;
          this.userSubmitted.email_address = this.registrationForm.value.email;
          this.userSubmitted.date_of_birth = this.registrationForm.value.birthDate;
          this.userSubmitted.phone_number = this.registrationForm.value.mobile;
          this.userSubmitted.password = this.registrationForm.value.password
          
          console.log(this.userSubmitted);
          
          this.postsService.submiteUsersDetails(this.userSubmitted);
          this.registrationForm.form.reset();
        }

      }

      
    });

    
    

    
  }

  checkLoginDetails() {
    let count = 0;
    let response = 'Errors:';

    if (this.emailReg.test(this.user.email_address)) {
      console.log('Email is valid: ' + this.user.email_address);
      count++;
    } else {
      console.log('Email is invalid: ' + this.user.email_address);
      response += '\n-Invalid email format';
    }

    if (this.nameReg.test(this.user.first_name)) {
      console.log('First name valid: ' + this.user.first_name);
      count++;
    } else {
      console.log('First name invalid: ' + this.user.first_name);
      response += '\n-Invalid first name format';
    }

    if (this.nameReg.test(this.user.last_name)) {
      console.log('Last name valid: ' + this.user.last_name);
      count++;
    } else {
      console.log('Last name invalid: ' + this.user.last_name);
      response += '\n-Invalid last name format';
    }

    if (this.phoneNoReg.test(this.user.phone_number)) {
      console.log('Phone number is valid: ' + this.user.phone_number);
      count++;
    } else {
      console.log('Phone number is invalid: ' + this.user.phone_number);
      response += '\n-Invalid phone number format';
    }

    if (this.user.password == this.passwordCheck) {
      console.log('Passwords match: ' + this.user.password);
      count++;
    } else {
      console.log('Passwords do not match: ' + this.user.password);
      response += '\n-Passwords do not match';
    }

    console.log('Correct count: ' + count + '/5');
    if (count != 5) {
      alert(response);
    }


    return count;
  }

  
}
