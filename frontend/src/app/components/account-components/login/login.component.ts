import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  active: number;

  constructor() {
    this.active=0;
   }


  ngOnInit(): void {
    
  }

  updateActive(newVal: number){
    
    this.active=newVal;
  }

  

}
