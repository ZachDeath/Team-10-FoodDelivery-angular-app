import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-meat-menu',
  templateUrl: './meat-eater-menu.component.html',
  styleUrls: ['./meat-eater-menu.component.css'],
})

export class MeatEaterMenuComponent implements OnInit {
  
  constructor(private menuService: MenuService) {
    console.log('MeatEater Menu Loaded');
  }

  meatEaterMenu = this.menuService.meatEaterMenu

  ngOnInit(): void {}
}
