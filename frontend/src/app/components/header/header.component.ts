import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imagePath = "assets/images/pizza.png"

  constructor() { 
    console.log("Header Loaded")
  }

  ngOnInit(): void {
  }

}
