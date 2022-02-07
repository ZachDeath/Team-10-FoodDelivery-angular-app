import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { Registereduser } from 'src/app/shared/registeredUser.model';
import { User } from 'src/app/shared/userConstructor';

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
