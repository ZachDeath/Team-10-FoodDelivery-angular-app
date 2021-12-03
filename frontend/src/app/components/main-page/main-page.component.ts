import { Component, OnInit } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  user: any = {name: "testUser", age:23,}
  vegetarianPizza = "assets/images/vegetarian-pizza.jpg"

  constructor() { 
    console.log("Main Page Loaded")
  }


  ngOnInit(): void {
  }

}
