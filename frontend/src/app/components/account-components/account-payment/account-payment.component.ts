import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-account-payment',
  templateUrl: './account-payment.component.html',
  styleUrls: ['./account-payment.component.css']
})

export class AccountPaymentComponent implements OnInit {

  @ViewChild('paymentForm') paymentForm: NgForm;

  constructor() { }

  
  cardNumberGroup: FormGroup;

  ngOnInit(){
  }

  onSubmit():void{

  }

  

}


