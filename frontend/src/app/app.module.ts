import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appComponent } from './app.component';
// import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [appComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [appComponent],
})
export class appModule {}
