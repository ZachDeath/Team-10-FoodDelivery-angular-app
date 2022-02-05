import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AddressService } from 'src/app/services/address.service';
import { UserService } from 'src/app/services/user.service';
import { Address } from 'src/app/shared/addressConstructor';
import { User } from 'src/app/shared/userConstructor';

@Component({
  selector: 'app-account-address',
  templateUrl: './account-address.component.html',
  styleUrls: ['./account-address.component.css'],
})
export class AccountAddressComponent implements OnInit {
  @ViewChild('addressForm') addressForm: NgForm;

  address: Address = {
    user_id:null,
    first_name: null,
    last_name:null,
    first_line:null,
    second_line:null,
    city:null,
    state:null,
    post_code:null
  }
  loggedUser: User;

  constructor(private addressService: AddressService, private userService:UserService) {
    this.loggedUser=userService.userObj;

    this.userService.loggedUser.subscribe((user: User)=>{
      userService.userObj=user;
      
      this.loggedUser=user;
      console.log(user);
  });
}

  ngOnInit(): void {}

  onSubmit(): void {

 
    this.address.first_name = this.addressForm.value.firstname;
    this.address.last_name = this.addressForm.value.lastname;
    this.address.first_line = this.addressForm.value.address1;
    this.address.second_line = this.addressForm.value.address2;
    this.address.city = this.addressForm.value.city;
    this.address.state = this.addressForm.value.state;
    this.address.post_code = this.addressForm.value.post;

    console.log(this.address.user_id);
    
    console.log(this.addressForm.value.firstname);
    console.log(this.addressForm.value.lastname);
    console.log(this.addressForm.value.address1);
    console.log(this.addressForm.value.address2);
    console.log(this.addressForm.value.city);
    console.log(this.addressForm.value.state);
    console.log(this.addressForm.value.post);

    this.addressService.editUser(this.loggedUser.user_id, this.address);
    this.clearForm();
  }

  clearForm() {
    this.addressForm.form.reset();
  }
}
