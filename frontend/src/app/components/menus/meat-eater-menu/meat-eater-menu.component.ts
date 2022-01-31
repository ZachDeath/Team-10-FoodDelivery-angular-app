import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { menuItem } from '../../../shared/menuItem.model';
import { BasketService } from 'src/app/services/basket.service';
import { MenuItem } from 'src/app/common/menuItem';

@Component({
  selector: 'app-meat-menu',
  templateUrl: './meat-eater-menu.component.html',
  styleUrls: ['./meat-eater-menu.component.css'],
})

export class MeatEaterMenuComponent implements OnInit {

  items: MenuItem[]
  
  constructor(private menuService: MenuService, private bService:BasketService) {
    console.log('MeatEater Menu Loaded');
  }

  meatEaterMenu = this.menuService.meatEaterMenu

  addToBasketFromMenu(item:menuItem){

    this.bService.addItem(item)

  }

  ngOnInit(): void {
    this.listMenuItems();
    console.log(this.items);
  }

  listMenuItems(): void{
    this.menuService.getMenuList().subscribe(data =>
      {this.items=data})
  }
}
