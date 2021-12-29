import { Injectable, OnInit } from "@angular/core";
import { menuItem } from "../shared/menuItem.model";

@Injectable({
    providedIn: "root"
})
export class MenuService implements OnInit{
    menu: menuItem[] = [
        {
          title: 'Pepperoni Pizza',
          description: 'this is a meat pizza',
          quantity: 1,
          price: 15.0,
          picture:
            'https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg',
          typeOfFood: 0,
        },

        {
          title: 'Texas BBQ',
          description: 'Chicken, bacon, peppers and BBQ sauce',
          quantity: 1,
          price: 15.0,
          picture:
            'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
          typeOfFood: 0,
        },

        {
          title: 'Meat feast',
          description: 'Chicken, bacon, pepperoni and veg',
          quantity: 1,
          price: 15.0,
          picture:
            'https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg',
          typeOfFood: 0,
        },
    
        {
          title: 'Veggie Pizza',
          description: 'This is another veg pizza',
          quantity: 1,
          price: 19.0,
          picture:
            'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
          typeOfFood: 1,
        },

        {
          title: 'Veggie supreme',
          description: 'This is a veg pizza',
          quantity: 1,
          price: 19.0,
          picture:
            'https://cookieandkate.com/images/2020/10/best-veggie-pizza-recipe-1.jpg',
          typeOfFood: 1,
        },

        {
          title: 'Garlic bread',
          description: 'first side',
          quantity: 1,
          price: 9.0,
          picture:
            'https://www.shugarysweets.com/wp-content/uploads/2020/04/garlic-bread-4-720x540.jpg',
          typeOfFood: 2,
        },
        {
          title: 'Potato wedgies',
          description: 'A second side',
          quantity: 1,
          price: 6.0,
          picture:
            'https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Baked-potato-wedges-4.jpg',
          typeOfFood: 2,
        },

        {
          title: 'Cookies',
          description: 'A third side',
          quantity: 1,
          price: 3.0,
          picture:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-brownbutterchocolatechipcookie089-210201-sc-1612476612.jpg?crop=0.830xw:0.793xh;0.0816xw,0.140xh&resize=640:*',
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
    