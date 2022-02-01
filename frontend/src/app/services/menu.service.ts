import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { map, Observable } from 'rxjs';
import { MenuItem } from "../common/menuItem";
import { menuItem } from "../shared/menuItem.model";
import { testMenuItem } from "../shared/testMenuItem.model";

@Injectable({
    providedIn: "root"
})
export class MenuService implements OnInit{

  private baseURL = 'http://localhost:8090/menu-item/get-menu-items';

  items: testMenuItem[]

  //menu: menuItem[];
    menu: menuItem[] = [
        
      ];
      
      menuTypeArray = [];
      meatEaterMenu = []
      vegMenu = []
      sideMenu = []
    
      constructor(private httpClient: HttpClient) {
        console.log('Menu Loaded');
        //console.log(typeof(this.menu[2].price))
        //this.listMenuItems();
        
      }
    
      ngOnInit(): void {
        console.log("in menu serivce init");
        //this.listMenuItems();
        //this.createMenus();

        
      }
    
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



      getMenuList(){
        
        return this.httpClient
        .get(this.baseURL)
        .pipe();
      }


      listMenuItems(): void{
        //console.log("in list menu items");
        this.menu=[];
        this.items=[];
        this.menuTypeArray = [];
        this.meatEaterMenu = []
        this.vegMenu = [];
        this.sideMenu = [];
        
        //console.log("in if");
        this.getMenuList().subscribe((items: testMenuItem[]) => {
          this.items = items;
          for(let i=0;i<this.items.length;i++){
            let temp: menuItem = {
              title: this.items[i].title,
              description: this.items[i].description,
              quantity: 1,
              price: this.items[i].unitprice,
              picture: this.items[i].picture_url,
              typeOfFood: this.items[i].food_type
            }
            this.menu.push(temp);
              //console.log("in for loop");
          }
          this.createMenus();
          
          });
        
      }
      
    
    }
    
    