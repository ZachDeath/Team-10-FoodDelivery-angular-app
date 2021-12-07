import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//configure route paths
const routes: Routes = [];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes),],
  exports: [RouterModule]
  
})
export class RoutingModule { 

  constructor(){
  }
}
