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

//configure route paths
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'checkout', component: BasketComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'meat-menu', component: MeatEaterMenuComponent },
  { path: 'veg-menu', component: VegMenuComponent },
  { path: 'sides-menu', component: SideMenuComponent },
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
