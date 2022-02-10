import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BasketComponent } from './components/basket/basket.component';
import { MenuComponent } from './components/menus/menu.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SideMenuComponent } from './components/menus/side-menu/side-menu.component';
import { MeatEaterMenuComponent } from './components/menus/meat-eater-menu/meat-eater-menu.component';
import { VegMenuComponent } from './components/menus/veg-menu/veg-menu.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LoginComponent } from './components/account-components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AccountDetailsComponent } from './components/account-components/account-details/account-details.component';
import { AccountPaymentComponent } from './components/account-components/account-payment/account-payment.component';
import { AccountAddressComponent } from './components/account-components/account-address/account-address.component';
import { AccountOrderComponent } from './components/account-components/account-order/account-order.component';
import { OverviewComponent } from './components/admin/overview/overview.component';
import { DetailsComponent } from './components/admin/details/details.component';
import { MessagesComponent } from './components/admin/messages/messages.component';
import { EmployeesComponent } from './components/admin/employees/employees.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { AddEmployeeComponent } from './components/admin/employees/add-employee/add-employee.component';
import { OrdersComponent } from './components/admin/orders/orders.component';

//configure route paths
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'adminLogin', component: AdminFormComponent},
  { path: 'login-dashboard', component: LoginComponent,
  children : [
        { path: 'details', component : AccountDetailsComponent },
        { path: 'payment', component : AccountPaymentComponent },
        { path: 'address', component : AccountAddressComponent },
        { path: 'orders', component : AccountOrderComponent }
    ] },
  { path: 'admin-dashboard', component: AdminComponent ,
  children : [
    { path: 'overview', component : OverviewComponent },
    { path: 'details', component : DetailsComponent},
    { path: 'messages', component : MessagesComponent},
    { path: 'employees', component : EmployeesComponent},
    { path: 'addEmployee', component: AddEmployeeComponent},
    { path: 'orders', component: OrdersComponent}  
  ]},
  { path: 'registration', component: RegistrationComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'meat-menu', component: MeatEaterMenuComponent },
  { path: 'veg-menu', component: VegMenuComponent },
  { path: 'sides-menu', component: SideMenuComponent },
  { path: 'contact-page', component: ContactPageComponent},
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes),],
  exports: [RouterModule]
  
})
export class RoutingModule { 

  constructor(){
  }
}
