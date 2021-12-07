import { Component, OnInit } from '@angular/core';
import { menuOption } from './menuOptions.model';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})

export class MainPageComponent implements OnInit {
  
  menus: menuOption[] = [
    new menuOption(0,"Meateater","assets/images/meat-pizza.jpg"), new menuOption(1,"Vegetarian","assets/images/vegetarian-pizza.jpg"), new menuOption(2,"Sides","assets/images/garlicbread.jpg")
  ];
   
  constructor() {
    
  
    // {
    //   name: 'Vegetarian',
    //   photo: 'frontend/src/assets/images/vegetarian-pizza.jpg',
    //   id: 2,
    // },
    // {
    //   name: 'Sides',
    //   photo: 'frontend/src/assets/images/garlicbread.jpg',
    //   id: 3,
    // },

    console.log('Main Page Loaded');
  }

  ngOnInit(): void {}
}
