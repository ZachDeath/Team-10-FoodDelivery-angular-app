import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/userConstructor';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  loggedUser: User;
  
  imagePath = "assets/images/pizza.png"
  

  constructor(private userService: UserService) { 
    console.log("Banner Loaded")
    this.loggedUser=this.userService.userObj;

    this.userService.loggedUser.subscribe((user: User)=>{
      this.userService.userObj=user;
      this.loggedUser=user;
    });
  }

  ngOnInit(): void {
    


  }

}
