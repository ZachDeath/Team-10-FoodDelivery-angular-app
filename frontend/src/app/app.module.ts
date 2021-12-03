import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [appComponent, HeaderComponent, FooterComponent, LoginFormComponent],

  imports: [BrowserModule,
  FormsModule],
  providers: [],
  bootstrap: [appComponent],
})

export class appModule {}
