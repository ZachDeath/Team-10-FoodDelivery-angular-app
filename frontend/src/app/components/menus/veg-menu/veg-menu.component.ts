import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-veg-menu',
  templateUrl: './veg-menu.component.html',
  styleUrls: ['./veg-menu.component.css']
})
export class VegMenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  vegMenu = this.menuService.vegMenu

  ngOnInit(): void {
  }

}
