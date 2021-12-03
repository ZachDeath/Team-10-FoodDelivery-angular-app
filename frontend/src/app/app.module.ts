import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [appComponent, HeaderComponent, FooterComponent, LoginFormComponent, MainPageComponent, RegistrationComponent],

  imports: [BrowserModule,
  FormsModule],
  providers: [],
  bootstrap: [appComponent],
})

export class appModule {}
