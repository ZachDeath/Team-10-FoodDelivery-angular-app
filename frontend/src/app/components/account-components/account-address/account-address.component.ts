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

  constructor() { }

  
  ngOnInit(): void {
   
  }

  onSubmit(): void {

  }

  

}
