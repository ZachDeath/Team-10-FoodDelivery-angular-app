import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  
  constructor(private menuService: MenuService) { }

  sidesMenu = this.menuService.sideMenu

  ngOnInit(): void {
  }

}
