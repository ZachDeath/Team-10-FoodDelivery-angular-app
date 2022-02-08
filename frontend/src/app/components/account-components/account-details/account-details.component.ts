import { Component, OnInit} from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { PaymentService } from 'src/app/services/payment.service';
import { UserService } from 'src/app/services/user.service';
import { Address } from 'src/app/shared/addressConstructor';
import { Payment } from 'src/app/shared/paymentConstructor';
import { User } from 'src/app/shared/userConstructor';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  loggedUser: User;
  payment: Payment;
  address: Address;

  constructor(private userService: UserService, private paymentService: PaymentService,
    private addressService: AddressService) {
    
    
    this.loggedUser=userService.userObj;
    this.address = null;
  

    
    
  }
  

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    console.log(
      this.addressService
        .getUserByID(this.loggedUser.user_id)
        .subscribe((address) => {
          this.address = address;
        })
    );
    this.paymentService.getPayment(this.loggedUser.user_id).subscribe((payment:Payment)=>{
      this.payment=payment;
    })
  }

}