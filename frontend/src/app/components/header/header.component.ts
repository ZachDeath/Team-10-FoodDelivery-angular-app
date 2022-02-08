<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
=======
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { BasketService } from 'src/app/services/basket.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';
import { HeaderColorService } from 'src/app/services/header-color.service';
>>>>>>> Stashed changes
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
  color = '#dc4726'

<<<<<<< Updated upstream
  constructor(private bService: BasketService) {
=======




  constructor(private bService: BasketService, private userService: UserService, private router: Router,
    private employeeService: EmployeeService) {
>>>>>>> Stashed changes
    console.log('Header Loaded');

  }

<<<<<<< Updated upstream
  ngOnInit(): void {
=======


  loginStatus: boolean;
  isAdmin: boolean;

  ngOnInit() {

>>>>>>> Stashed changes
    this.itemsInBasket = this.bService.getItems();
    this.totalPrice();
    this.bService.itemsChanged.subscribe((items: menuItem[]) => {
      this.itemsInBasket = items;
      this.totalPrice();
    });
<<<<<<< Updated upstream
=======

    this.userService.loginChanged.subscribe((update: boolean) => {
      console.log("Change happened");
      this.loginStatus = update;

    });

    this.employeeService.loginChanged.subscribe((update: boolean) => {
      console.log("Admin logged in/logged out");
      this.isAdmin = update;
      this.color = '#ba1e1e'
    })




>>>>>>> Stashed changes
  }

  totalPrice() {
    let sum = 0;
    this.itemsInBasket.forEach((element) => {
      sum += element.price * element.quantity;
    });

    this.basketPrice = sum;
  }
<<<<<<< Updated upstream
=======

  logOut() {
    this.userService.userLoggedOut();
    this.router.navigate(['/'])
  }

  adminLogout() {
    this.employeeService.employeeLoggedOut();
    this.router.navigate(['/'])
    this.color = '#dc4726';
    window.location.reload();
  }

>>>>>>> Stashed changes
}
