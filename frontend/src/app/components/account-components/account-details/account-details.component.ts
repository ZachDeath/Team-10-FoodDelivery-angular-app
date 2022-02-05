import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/userConstructor';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})

export class AccountDetailsComponent implements OnInit {

  loggedUser: User;

  constructor(private userService: UserService) {
    
    this.loggedUser=userService.userObj;

    this.userService.loggedUser.subscribe((user: User)=>{
      userService.userObj=user;
      
      this.loggedUser=user;
      console.log(user.user_id);
      console.log("User in account details^^")
    });
  }

  
  ngOnInit(): void {

    
   
  }

  printUser(){
    console.log("User:")
    console.log(this.loggedUser);
  }

  

}
