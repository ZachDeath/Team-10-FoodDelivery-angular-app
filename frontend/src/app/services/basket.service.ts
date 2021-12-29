import { Injectable, OnInit } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { menuItem } from "../shared/menuItem.model";

@Injectable({
    providedIn: "root"
})
export class BasketService implements OnInit{

    itemsChanged = new EventEmitter<menuItem[]>();
    itemsInBasket:menuItem[]=[];

    ngOnInit(){

        console.log("Basket service created");

    }

    getItems(){
        return this.itemsInBasket.slice();
    }


    addItem(menuItem:menuItem){

        this.itemsInBasket.push(menuItem);
        //console.log(this.itemsInBasket);
        this.itemsChanged.emit(this.itemsInBasket.slice());

    }

    deleteItem(menuItem:menuItem){

        this.itemsInBasket.forEach((element, index)=>{
            if (element==menuItem){
                this.itemsInBasket.splice(index,1);
            }
        })

        this.itemsChanged.emit(this.itemsInBasket.slice());

    }

}