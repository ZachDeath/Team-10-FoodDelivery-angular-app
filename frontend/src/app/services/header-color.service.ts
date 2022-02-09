import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeaderColorService{
  
  colorSource = new BehaviorSubject<String>('#dc4726');
  
  currentColor = new EventEmitter<String>();;

  constructor() {   }
  

  changeColor(color: String) {
    this.colorSource.next(color);
  }

  getColor() {
    return this.currentColor;
  }

}
