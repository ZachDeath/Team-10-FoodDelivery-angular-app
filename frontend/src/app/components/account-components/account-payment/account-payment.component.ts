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
    console.log(this.paymentForm.value.fullname);
    console.log(this.paymentForm.value.cardnumber);
    console.log(this.paymentForm.value.expiry);
    console.log(this.paymentForm.value.cvv);

    this.clearForm();
  }

  clearForm(){

    this.paymentForm.form.reset();
    
  }

  

}


