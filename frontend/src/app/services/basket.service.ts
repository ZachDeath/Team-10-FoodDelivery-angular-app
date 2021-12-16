import { Injectable, OnInit } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { menuItem } from "../shared/menuItem.model";

@Injectable({
    providedIn: "root"
})
export class BasketService implements OnInit{

    itemsChanged = new EventEmitter<menuItem[]>();
    itemsInBasket:menuItem[]=[{
        title:"Pizza 1",
        description: "this is a test item",
        quantity: 1,
        price: 15.00,
        picture: "https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg",
        typeOfFood: 0
    },

    {
        title:"Pizza 2",
        description: "this is a second test item",
        quantity: 1,
        price: 19.00,
        picture: "https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg",
        typeOfFood: 1
    }];

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