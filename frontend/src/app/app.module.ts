import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BannerComponent } from './components/banner/banner.component';
import { RoutingModule } from './routing.module';
import { BasketComponent } from './components/basket/basket.component';
import { MenuComponent } from './components/menus/menu.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MeatEaterMenuComponent } from './components/menus/meat-eater-menu/meat-eater-menu.component';
import { VegMenuComponent } from './components/menus/veg-menu/veg-menu.component';
import { SideMenuComponent } from './components/menus/side-menu/side-menu.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/account-components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AccountAddressComponent } from './components/account-components/account-address/account-address.component';
import { AccountPaymentComponent } from './components/account-components/account-payment/account-payment.component';
import { AccountOrderComponent } from './components/account-components/account-order/account-order.component';
import { DetailsComponent } from './components/admin/details/details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTableModule } from '@angular/material/table';
import { MessagesComponent } from './components/admin/messages/messages.component';
import { EmployeesComponent } from './components/admin/employees/employees.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { AddEmployeeComponent } from './components/admin/employees/add-employee/add-employee.component';
import { AccountDetailsComponent } from './components/account-components/account-details/account-details.component';
import { OrdersComponent } from './components/admin/orders/orders.component';

@NgModule({
  declarations: [
    appComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    AdminFormComponent,
    MainPageComponent,
    RegistrationComponent,
    BannerComponent,
    BasketComponent,
    MenuComponent,
    ErrorPageComponent,
    MeatEaterMenuComponent,
    VegMenuComponent,
    SideMenuComponent,
    ContactPageComponent,
    LoginComponent,
    AdminComponent,
    AccountAddressComponent,
    AccountPaymentComponent,
    AccountOrderComponent,
    DetailsComponent,
    MessagesComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    AccountDetailsComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class appModule {}
