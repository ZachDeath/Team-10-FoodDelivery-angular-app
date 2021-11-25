import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { homeComponent } from './home.component';

@NgModule({
  declarations: [homeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [homeComponent],
})
export class homeModule {}
