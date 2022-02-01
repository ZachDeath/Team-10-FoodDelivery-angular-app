import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { menuItem } from '../../../shared/menuItem.model';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  
  constructor(private menuService: MenuService, private bService:BasketService) { }

  sidesMenu = this.menuService.sideMenu

  ngOnInit(): void {
    //this.menuService.listMenuItems();
  }

  addToBasketFromMenu(item:menuItem){

    this.bService.addItem(item)

  }

}
