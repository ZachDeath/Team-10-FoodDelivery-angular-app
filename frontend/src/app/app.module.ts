import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [appComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [appComponent],
})

export class appModule {}
