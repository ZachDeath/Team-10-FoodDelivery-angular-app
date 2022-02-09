import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

import { menuItem } from '../../shared/menuItem.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

    itemsInBasket:menuItem[]=[];
    basketPrice:number=0;
    noItemsInBasket:number;


    constructor(private bService:BasketService) { 

        this.itemsInBasket=this.bService.getItems();
        this.bService.itemsChanged.subscribe((items:menuItem[])=>{

            this.itemsInBasket=items;
            this.basketPrice =this.bService.basketPrice;
            this.noItemsInBasket=this.bService.noItems

        })
    }

    ngOnInit(): void {

        this.basketPrice=this.bService.basketPrice;
        this.noItemsInBasket=this.bService.noItems;
        

    }

    deleteItems(menuItem:menuItem){

        this.bService.deleteItem(menuItem);

    }


    addDuplicate(item: menuItem){
     
        this.bService.addItem(item);

    }

    testing(){
        this.bService.getBasketFromDatabase(112);
    }

}
