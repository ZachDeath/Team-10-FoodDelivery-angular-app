import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { UserService } from 'src/app/services/user.service';
import { Payment } from 'src/app/shared/paymentConstructor';
import { User } from 'src/app/shared/userConstructor';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})

export class AccountDetailsComponent implements OnInit {

  loggedUser: User;
  payment: Payment;

  constructor(private userService: UserService, private paymentService: PaymentService) {
    
    
    this.loggedUser=userService.userObj;
      
  

    this.paymentService.getPayment(this.loggedUser.user_id).subscribe((payment:Payment)=>{
      this.payment=payment;
    })
    
  
  }

  
  ngOnInit(): void {

    
   
  }

  printUser(){
    console.log("User:")
    console.log(this.loggedUser);
  }

  

}
