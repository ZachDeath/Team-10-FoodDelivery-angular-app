import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/services/basket.service';
import { UserService } from 'src/app/services/user.service';


import { menuItem } from '../../shared/menuItem.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  itemsInBasket: menuItem[] = [];
  basketPrice: number = 0;
  imagePath = 'assets/images/pizza.png';

  constructor(private bService: BasketService, private userService: UserService, private router: Router) {
    console.log('Header Loaded');
  }

  loginStatus: boolean;

  ngOnInit(): void {
    this.itemsInBasket = this.bService.getItems();

    this.bService.itemsChanged.subscribe((items:menuItem[])=>{

      this.itemsInBasket=items;
      this.bService.totalPrice();
      this.basketPrice =this.bService.basketPrice;
      

  })

    this.userService.loginChanged.subscribe((update:boolean)=>{
      console.log("Change happened");
      this.loginStatus=update;
      
    });
  }

  logOut(){
    this.userService.userLoggedOut();
    this.router.navigate(['/'])
  }
}
