import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/userConstructor';
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
   
  constructor(private menuService: MenuService) {
    
    console.log('Main Page Loaded');
  }

  ngOnInit(): void {
    this.menuService.listMenuItems();

    
  }


}
