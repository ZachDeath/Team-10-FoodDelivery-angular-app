import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { menuItem } from '../../../shared/menuItem.model';
import { BasketService } from 'src/app/services/basket.service';



@Component({
  selector: 'app-meat-menu',
  templateUrl: './meat-eater-menu.component.html',
  styleUrls: ['./meat-eater-menu.component.css'],
})

export class MeatEaterMenuComponent implements OnInit {

  
  
  constructor(private menuService: MenuService, private bService:BasketService) {
    console.log('MeatEater Menu Loaded');
    //menuService.listMenuItems();
    //menuService.createMenus();
    
  }

  meatEaterMenu: menuItem[] = []

  addToBasketFromMenu(item:menuItem){
    
    console.log(item);
    this.bService.addItem(item)

  }

  ngOnInit(): void {
  this.meatEaterMenu = this.menuService.meatEaterMenu
  }

  // listMenuItems(): void{
  //   this.menuService.getMenuList().subscribe((items: testMenuItem[]) => {
  //     this.items = items;
  //   });
  // }
}
