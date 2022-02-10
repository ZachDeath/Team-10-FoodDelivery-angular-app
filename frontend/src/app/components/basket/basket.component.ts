import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

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
    loginStatus:boolean;
    checkedOut:boolean;


    constructor(private bService:BasketService, private orderService: OrderService, private userService: UserService) { 

        this.itemsInBasket=this.bService.getItems();
        this.bService.itemsChanged.subscribe((items:menuItem[])=>{

            this.itemsInBasket=items;
            this.basketPrice =this.bService.basketPrice;
            this.noItemsInBasket=this.bService.noItems

        })
    }

    ngOnInit(): void {
        this.checkedOut=false;
        this.loginStatus=this.userService.islogged;
        this.basketPrice=this.bService.basketPrice;
        this.noItemsInBasket=this.bService.noItems;

        this.userService.loginChanged.subscribe((update: boolean) => {
            console.log("Change happened");
            this.loginStatus = update;
      
          });
        

    }

    deleteItems(menuitem:menuItem){

        
        this.bService.deleteItem(menuitem);

    }


    addDuplicate(menuitem: menuItem){
        let temp = new menuItem(menuitem.food_id,menuitem.title,null,null,null,1,null);
        
        this.bService.addItem(temp);

    }

    onCheckout(){

        this.orderService.createNewOrder(this.userService.userObj.user_id, 8);
        //this.orderService.createNewOrder(211, 8);
        this.checkedOut=true;
    }

}
