import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { BasketCompositeId } from "../shared/basketCompositeId";
import { basketRecord } from "../shared/basketRecord";
import { menuItem } from "../shared/menuItem.model";


@Injectable({
    providedIn: "root"
})
export class BasketService implements OnInit{

    itemsChanged = new EventEmitter<menuItem[]>();
    itemsInBasket:menuItem[]=[];

    private apiUrl = 'http://localhost:8091/basket';
    basketPrice: number=0;

    constructor(private http: HttpClient) {}

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
        this.totalPrice();

    }

    deleteItem(menuItem:menuItem){

        this.itemsInBasket.forEach((element, index)=>{
            if (element==menuItem){
                this.itemsInBasket.splice(index,1);
            }
        })

        
        
        
        this.itemsChanged.emit(this.itemsInBasket.slice());

    }

    saveBasketToDatabase(){
        const url = `${this.apiUrl}/add-to-basket`;
        let temp = new BasketCompositeId(157, 5);
        let temp2= new basketRecord(temp, 33);

        this.http.put(url, temp2).pipe().subscribe();
        // for (let i; i<this.itemsInBasket.length;i++){

        // }

    }

    totalPrice(){
        let sum=0;
        this.itemsInBasket.forEach((element: menuItem) => {
            sum +=(element.unitprice*element.quantity);
            console.log("Price:")
            console.log(element.unitprice);
            console.log("Element")
            console.log(element);
        });

        this.basketPrice=sum;


    }

}