import { Injectable, OnInit } from "@angular/core";
import { menuItem } from "../shared/menuItem.model";

@Injectable({
    providedIn: "root"
})
export class MenuService implements OnInit{
    menu: menuItem[] = [
        {
          title: 'Pizza 1',
          description: 'this is a meat pizza',
          quantity: 1,
          price: 15.0,
          picture:
            'https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg',
          typeOfFood: 0,
        },
    
        {
          title: 'Pizza 2',
          description: 'this is a veg pizza',
          quantity: 1,
          price: 19.0,
          picture:
            'https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg',
          typeOfFood: 1,
        },
        {
          title: 'Side 1',
          description: 'first side',
          quantity: 1,
          price: 19.0,
          picture:
            'https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg',
          typeOfFood: 2,
        },
        {
          title: 'Side 2',
          description: 'A second side',
          quantity: 1,
          price: 19.0,
          picture:
            'https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg',
          typeOfFood: 2,
        },
      ];
      
      menuTypeArray = [];
      meatEaterMenu = []
      vegMenu = []
      sideMenu = []
    
      constructor() {
        console.log('Menu Loaded');
        this.createMenus();
      }
    
      ngOnInit(): void {}
    
      createMenus() {
        for (let i = 0; i < this.menu.length; i++) {
          if (this.menu[i].typeOfFood == 0) {
            this.meatEaterMenu.push(this.menu[i]);
          }
          if (this.menu[i].typeOfFood == 1) {
            this.vegMenu.push(this.menu[i]);
          }
          if (this.menu[i].typeOfFood == 2) {
            this.sideMenu.push(this.menu[i]);
          }
        }
        // returns all the different types of menus
        console.log(this.meatEaterMenu, this.vegMenu, this.sideMenu);
        return this.meatEaterMenu, this.vegMenu, this.sideMenu;
      }

      
    
    }
    