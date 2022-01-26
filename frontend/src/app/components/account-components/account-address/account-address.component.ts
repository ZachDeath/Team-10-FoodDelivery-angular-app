import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-account-address',
  templateUrl: './account-address.component.html',
  styleUrls: ['./account-address.component.css']
})

export class AccountAddressComponent implements OnInit {

  @ViewChild('addressForm') addressForm: NgForm;

  firstname: String;
  lastname:String;
  line1: String;
  line2: String;
  city: String;
  postcode: String;

  constructor() { }

  
  ngOnInit(): void {
   
  }

  onSubmit(): void {

    console.log(this.addressForm.value.firstname);
    console.log(this.addressForm.value.lastname);
    console.log(this.addressForm.value.address1);
    console.log(this.addressForm.value.address2);
    console.log(this.addressForm.value.city);
    console.log(this.addressForm.value.state);
    console.log(this.addressForm.value.post);
    
    this.clearForm();

  }

  clearForm(){

    this.addressForm.form.reset();
    
  }

  

}
