import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BannerComponent } from './components/banner/banner.component';
import { RoutingModule } from './routing.module';
import { BasketComponent } from './components/basket/basket.component';

@NgModule({
  declarations: [appComponent, HeaderComponent, FooterComponent, LoginFormComponent, MainPageComponent, RegistrationComponent, BannerComponent, BasketComponent],

  imports: [BrowserModule,
  FormsModule, RoutingModule],
  providers: [],
  bootstrap: [appComponent],
})

export class appModule {}
