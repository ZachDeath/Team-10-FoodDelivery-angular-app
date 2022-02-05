import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressService } from 'src/app/services/address.service';
import { UserService } from 'src/app/services/user.service';
import { Address } from 'src/app/shared/addressConstructor';
import { User } from 'src/app/shared/userConstructor';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  loggedUser: User;
  address: Address;

  constructor(
    private userService: UserService,
    private addressService: AddressService
  ) {
    this.loggedUser = userService.userObj;

    this.userService.loggedUser.subscribe((user: User) => {
      userService.userObj = user;

      this.loggedUser = user;
      console.log(user.user_id);
      console.log('User in account details^^');
    });

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
  }

  printUser() {
    console.log('User:');
    console.log(this.loggedUser);
  }
}
