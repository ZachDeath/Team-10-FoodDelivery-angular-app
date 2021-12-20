import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { BasketService } from 'src/app/services/basket.service';
import { menuItem } from '../../../shared/menuItem.model';

@Component({
  selector: 'app-veg-menu',
  templateUrl: './veg-menu.component.html',
  styleUrls: ['./veg-menu.component.css']
})
export class VegMenuComponent implements OnInit {

  constructor(private menuService: MenuService, private bService:BasketService) { }

  vegMenu = this.menuService.vegMenu

  ngOnInit(): void {
  }

  addToBasketFromMenu(item:menuItem){

    this.bService.addItem(item)

  }

}
