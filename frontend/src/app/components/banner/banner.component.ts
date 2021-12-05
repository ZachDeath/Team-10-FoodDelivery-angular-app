import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  imagePath = "assets/images/pizza.png"
  user: any = {name: "testUser", age:23,}

  constructor() { 
    console.log("Banner Loaded")
  }

  ngOnInit(): void {
  }

}
