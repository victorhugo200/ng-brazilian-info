import { Component, OnInit } from '@angular/core';
import data from '../../../../data/menu.json';
interface Menu {
  id: number;
  title: string;
  route?: string;
  hasDropdown: boolean;
  dropdownList?: Array<{ title: string; route: string }>;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuList: Menu[] = data;

  constructor() {}

  ngOnInit(): void {}
}
