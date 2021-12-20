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
    }

    ngOnInit(): void {

        this.itemsInBasket=this.bService.getItems();
        this.totalPrice();
        this.bService.itemsChanged.subscribe((items:menuItem[])=>{

            this.itemsInBasket=items;
            this.totalPrice();

        })

    }

    deleteItems(menuItem:menuItem){

        this.bService.deleteItem(menuItem);

    }

    totalPrice(){
        let sum=0;
        this.itemsInBasket.forEach(element => {
            sum +=(element.price*element.quantity);
        });

        this.basketPrice=sum;
    }

    //for testing - so can test adding items without menu screen
    addItems(){

        this.bService.addItem({
            title:"Pizza Test",
            description: "this is a test from button",
            quantity: 1,
            price: 15.00,
            picture: "https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg",
            typeOfFood: 1
        });



    }

    addDuplicate(item: menuItem){

        this.bService.addItem({

            title: item.title,
            description: item.description,
            quantity: item.quantity,
            price: item.price,
            picture: item.picture,
            typeOfFood: item.typeOfFood

        })

    }

}
