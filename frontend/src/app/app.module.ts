import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appComponent } from './app.component';

@NgModule({
  declarations: [appComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [appComponent],
})
export class appModule {}
