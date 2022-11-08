import { Component, OnInit } from '@angular/core';
import { Navbar } from './navbar';
import data from '../../../../data/menu.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarList: Navbar[] = data;

  constructor() {}

  ngOnInit(): void {}
}
