import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm} from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { UserService } from 'src/app/services/user.service';
import { Payment } from 'src/app/shared/paymentConstructor';



@Component({
  selector: 'app-account-payment',
  templateUrl: './account-payment.component.html',
  styleUrls: ['./account-payment.component.css']
})

export class AccountPaymentComponent implements OnInit {

  @ViewChild('paymentForm') paymentForm: NgForm;

  constructor(private userservice: UserService, private paymentService: PaymentService) { }

  
  cardNumberGroup: FormGroup;

  ngOnInit(){
  }

  onSubmit():void{
    //console.log(this.paymentForm.value)
    let temp = new Payment(this.userservice.userObj.user_id,this.paymentForm.value.cardType,this.paymentForm.value.cardnumber,
      this.paymentForm.value.vcc,this.paymentForm.value.expiryM,this.paymentForm.value.expiryY);

    //console.log(temp);

    this.paymentService.updatePayment(temp);

    this.clearForm();
  }

  clearForm(){

    this.paymentForm.form.reset();
    
  }

  

}


