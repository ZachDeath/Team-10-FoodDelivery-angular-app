import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Employee } from 'src/app/shared/employeeConstructor';
import { menuItem } from '../../shared/menuItem.model';
import { EmployeesComponent } from '../admin/employees/employees.component';

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
    employees: Employee[];
    rNumber: number;
    random: number;
    


    constructor(private bService:BasketService, private orderService: OrderService, private userService: UserService,
        private employeeService: EmployeeService) { 

        this.itemsInBasket=this.bService.getItems();
        this.bService.itemsChanged.subscribe((items:menuItem[])=>{

            this.itemsInBasket=items;
            this.basketPrice =this.bService.basketPrice;
            this.noItemsInBasket=this.bService.noItems

        });

        


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

        this.orderService.createNewOrder(this.userService.userObj.user_id, 27);
        //this.orderService.createNewOrder(211, random index);
        console.log(this.random);
        this.checkedOut=true;
    }

    removeDuplicate(menuitem: menuItem){
        let temp = new menuItem(menuitem.food_id,menuitem.title,null,null,null,1,null);
        this.bService.DeleteOneItem(temp);
    }

    getAllEmps() {
        this.employeeService.getAllEmployees().subscribe((employees: Employee[]) => {
            this.employees = employees;
            this.rNumber = this.employees.length;
            this.random = Math.floor(Math.random() * ((this.rNumber-1) - 0 + 1)) + 0
          });

    }

}
