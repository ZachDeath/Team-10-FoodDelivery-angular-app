import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';



import { menuItem } from '../shared/menuItem.model';


@Injectable({
  providedIn: 'root',
})

export class MenuService implements OnInit{
  private baseURL = 'http://localhost:8090/menu-item/get-menu-items';

  //items: menuItem[];

  //menu: menuItem[];
  menu: menuItem[];

  menuTypeArray = [];
  meatEaterMenu = [];
  vegMenu = [];
  sideMenu = [];

  constructor(private httpClient: HttpClient) {
    console.log('Menu Loaded');
    //console.log(typeof(this.menu[2].price))
    //this.listMenuItems();
  }

  ngOnInit(): void {
    console.log('in menu serivce init');
  }

  createMenus() {
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].food_type == 0) {
        this.meatEaterMenu.push(this.menu[i]);
      }
      if (this.menu[i].food_type == 1) {
        this.vegMenu.push(this.menu[i]);
      }
      if (this.menu[i].food_type == 2) {
        this.sideMenu.push(this.menu[i]);
      }
    }
    // returns all the different types of menus
    console.log(this.meatEaterMenu, this.vegMenu, this.sideMenu);
    return this.meatEaterMenu, this.vegMenu, this.sideMenu;
  }

  getMenuList() {
    return this.httpClient.get(this.baseURL).pipe();
  }

  listMenuItems(): void {
    //console.log("in list menu items");
    this.menu = [];
    //this.items = [];
    this.menuTypeArray = [];
    this.meatEaterMenu = [];
    this.vegMenu = [];
    this.sideMenu = [];

    //console.log("in if");
    this.getMenuList().subscribe((items: menuItem[]) => {
      //this.items = items;
      console.log("getting menu items");
      console.log(items);
      for (let i = 0; i < items.length; i++) {
        let temp = new menuItem(items[i].food_id,items[i].title,items[i].description,items[i].picture_url,items[i].food_type,1,items[i].unitprice);
        this.menu.push(temp);
        //console.log("in for loop");
      }

      this.createMenus();
    });
  }
}
