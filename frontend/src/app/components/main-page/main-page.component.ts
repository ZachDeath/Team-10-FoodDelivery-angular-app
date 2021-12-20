import { Component, OnInit } from '@angular/core';
import { menuOption } from './menuOptions.model';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})

export class MainPageComponent implements OnInit {
  
  menus: menuOption[] = [
    new menuOption(0,"Meateater","assets/images/meat-pizza.jpg","meat-menu"), new menuOption(1,"Vegetarian","assets/images/vegetarian-pizza.jpg", "veg-menu"), new menuOption(2,"Sides","assets/images/garlicbread.jpg", "sides-menu")
  ];
   
  constructor() {
    console.log('Main Page Loaded');
  }

  ngOnInit(): void {}
}
