import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  active: number;
  isLogged: boolean;

  constructor(private userService: UserService) {
    this.active=0;
   
   }


  ngOnInit(): void {

    
      this.isLogged=this.userService.islogged;
      
    
    
  }

  updateActive(newVal: number){
    
    this.active=newVal;
  }

  

}
