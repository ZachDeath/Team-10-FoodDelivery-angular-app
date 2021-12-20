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
  }

  meatEaterMenu = this.menuService.meatEaterMenu

  addToBasketFromMenu(item:menuItem){

    this.bService.addItem({

      title: item.title,
      description: item.description,
      quantity: item.quantity,
      price: item.price,
      picture: item.picture,
      typeOfFood: item.typeOfFood

  })

  }

  ngOnInit(): void {}
}
