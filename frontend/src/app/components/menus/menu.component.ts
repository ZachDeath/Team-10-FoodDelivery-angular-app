import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/common/menuItem';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private menuService: MenuService) {
    console.log('Menu Loaded');
  }

  ngOnInit(): void {
    this.menuService.listMenuItems();
  }
}
