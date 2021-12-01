import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { homeComponent } from './home.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [homeComponent, RegistrationComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [homeComponent],
})
export class homeModule {}
