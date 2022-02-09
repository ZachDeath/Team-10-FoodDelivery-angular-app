import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/post.service';
import { User } from 'src/app/shared/userConstructor';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('newUserForm') newUserForm: NgForm;

  user: User = {
    user_id: null,
    first_name: null,
    last_name: null,
    email_address: null,
    date_of_birth: null,
    phone_number: null,
    password: null,
  };

  postUser: User = {
    user_id: null,
    first_name: null,
    last_name: null,
    email_address: null,
    date_of_birth: null,
    phone_number: null,
    password: null,
  };

  passwordCheck: string;

  constructor(private postsService: PostsService) { 
    console.log('New User Form Loaded');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user.first_name = this.newUserForm.value.firstName;
    this.user.last_name = this.newUserForm.value.lastName;
    this.user.email_address = this.newUserForm.value.email;
    this.user.date_of_birth = this.newUserForm.value.birthDate;
    this.user.phone_number = this.newUserForm.value.mobile.toString();
    this.user.password = this.newUserForm.value.password;
    this.passwordCheck = this.newUserForm.value.rePassword;

    if (this.checkLoginDetails() == 1) {
      this.postUser.first_name = this.newUserForm.value.firstName;
      this.postUser.last_name = this.newUserForm.value.lastName;
      this.postUser.email_address = this.newUserForm.value.email;
      this.postUser.date_of_birth = this.newUserForm.value.birthDate;
      this.postUser.phone_number = this.newUserForm.value.mobile.toString();
      this.postUser.password = this.newUserForm.value.password;

      console.log(this.postUser);

      this.postsService.submiteUsersDetails(this.postUser);
      this.newUserForm.form.reset();
    }
  }


  checkLoginDetails() {
    let count = 0;
    let response = 'Errors:';

    if (this.user.password == this.passwordCheck) {
      console.log('Passwords match: ' + this.user.password);
      count++;
    } else {
      console.log('Passwords do not match: ' + this.user.password);
      response += '\n-Passwords do not match';
    }

    return count;
  }


}
