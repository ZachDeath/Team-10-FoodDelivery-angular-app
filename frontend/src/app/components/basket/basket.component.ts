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


    constructor(private bService:BasketService) { 

        this.itemsInBasket=this.bService.getItems();
        this.bService.itemsChanged.subscribe((items:menuItem[])=>{

            this.itemsInBasket=items;
            this.basketPrice =this.bService.basketPrice;
            console.log(this.bService.basketPrice);
            console.log("price^^");

        })
    }

    ngOnInit(): void {

        

    }

    deleteItems(menuItem:menuItem){

        this.bService.deleteItem(menuItem);

    }





    addDuplicate(item: menuItem){
        console.log("adding dup");
        console.log(item);
        this.bService.addItem(item);

    }

}
