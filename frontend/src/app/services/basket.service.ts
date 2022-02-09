import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { menuItem } from "../shared/menuItem.model";


@Injectable({
    providedIn: "root"
})
export class BasketService implements OnInit{

    itemsChanged = new EventEmitter<menuItem[]>();
    itemsInBasket:menuItem[]=[];
    noItems:number=0;

    private apiUrl = 'http://localhost:8091/basket';
    basketPrice: number=0;

    constructor(private http: HttpClient) {}

    ngOnInit(){

        console.log("Basket service created");

    }

    getItems(){
        return this.itemsInBasket.slice();
    }


    addItem(menuitem:menuItem){

        if (this.itemsInBasket.length>0){

            for(let i=0; i<this.itemsInBasket.length;i++){

                if (this.itemsInBasket[i].food_id==menuitem.food_id){
                    
                    this.itemsInBasket[i].quantity+=menuitem.quantity;
                    break;
                }
                else if ((this.itemsInBasket[i].food_id!=menuitem.food_id)&& (this.itemsInBasket.length-1==i)){
                    let temp = new menuItem(menuitem.food_id,menuitem.title,menuitem.description,menuitem.picture_url,menuitem.food_type,menuitem.quantity,menuitem.unitprice);
                
                    this.itemsInBasket.push(temp);
                    break;
                }
            }
        }
        else{
            let temp = new menuItem(menuitem.food_id,menuitem.title,menuitem.description,menuitem.picture_url,menuitem.food_type,menuitem.quantity,menuitem.unitprice);
                
            this.itemsInBasket.push(temp);
        }
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

    saveBasketToDatabase(userId: number){
        const url = `${this.apiUrl}/add-to-basket`;

        for(let i=0; i<this.itemsInBasket.length;i++){
        
            let temp= {
                "id": {
                    "user": userId,
                    "food": this.itemsInBasket[i].food_id
                },
                "quantity":this.itemsInBasket[i].quantity
            }
        
            this.http.post(url, temp).pipe().subscribe();
        }

        this.itemsInBasket=[];
        this.itemsChanged.emit(this.itemsInBasket.slice());

    }

    getBasketFromDatabase(userId: number){
        const url = `${this.apiUrl}/items-from-user/${userId}`;

        this.http.get(url).pipe().subscribe((menuItems: any[])=>{
            for (let i=0;i<menuItems.length;i++){
            
                let temp = new menuItem(menuItems[i].menu.food_id,menuItems[i].menu.title,menuItems[i].menu.description,menuItems[i].menu.picture_url,menuItems[i].menu.food_type,menuItems[i].quantity,menuItems[i].menu.unitprice);
                
                this.addItem(temp);
            }   
        });
        this.deleteBasketItems(userId);
    }

    deleteBasketItems(userId: number){
        const url = `${this.apiUrl}/delete-basket/${userId}`;

        this.http.get(url).pipe().subscribe();
    }

    totalPrice(){
        let sum=0;
        let noItems =0;
        this.itemsInBasket.forEach((element: menuItem) => {
            sum +=(element.unitprice*element.quantity);
            noItems+=element.quantity;
            
        });

        this.basketPrice=sum;
        this.noItems=noItems;
    }

}