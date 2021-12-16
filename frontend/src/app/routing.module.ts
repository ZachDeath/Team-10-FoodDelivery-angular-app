import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BasketComponent } from './components/basket/basket.component';
import { MenuComponent } from './components/menus/menu.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

//configure route paths
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'home', component: MainPageComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'checkout', component: BasketComponent },
  { path: 'menu', component: MenuComponent },
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
