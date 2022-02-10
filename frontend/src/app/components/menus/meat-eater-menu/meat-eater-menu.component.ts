import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { menuItem } from '../../../shared/menuItem.model';
import { BasketService } from 'src/app/services/basket.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/shared/employeeConstructor';



@Component({
  selector: 'app-meat-menu',
  templateUrl: './meat-eater-menu.component.html',
  styleUrls: ['./meat-eater-menu.component.css'],
})

export class MeatEaterMenuComponent implements OnInit {

  loggedAdmin: Employee;
  color= "#dc4726";
  
  
  constructor(private menuService: MenuService, private bService:BasketService,
    private eService: EmployeeService) {
    console.log('MeatEater Menu Loaded');
    //menuService.listMenuItems();
    //menuService.createMenus();

    this.loggedAdmin=this.eService.employeeObj;

    this.eService.loggedEmployee.subscribe((employee: Employee)=>{
      this.eService.employeeObj=employee;
      this.loggedAdmin=employee; });
    
  }

  meatEaterMenu: menuItem[] = []

  addToBasketFromMenu(item:menuItem){
    
    console.log(item);
    this.bService.addItem(item)

  }

  ngOnInit(): void {
    if(this.loggedAdmin) {
      this.color = '#ba1e1e';
    }
  this.meatEaterMenu = this.menuService.meatEaterMenu
  }

  // listMenuItems(): void{
  //   this.menuService.getMenuList().subscribe((items: testMenuItem[]) => {
  //     this.items = items;
  //   });
  // }
}
