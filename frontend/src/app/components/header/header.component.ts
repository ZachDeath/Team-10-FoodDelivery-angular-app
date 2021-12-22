import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
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

  constructor(private bService: BasketService) {
    console.log('Header Loaded');
  }

  ngOnInit(): void {
    this.itemsInBasket = this.bService.getItems();
    this.totalPrice();
    this.bService.itemsChanged.subscribe((items: menuItem[]) => {
      this.itemsInBasket = items;
      this.totalPrice();
    });
  }

  totalPrice() {
    let sum = 0;
    this.itemsInBasket.forEach((element) => {
      sum += element.price * element.quantity;
    });

    this.basketPrice = sum;
  }
}
