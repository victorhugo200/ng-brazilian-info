import { Component, Input, OnInit } from '@angular/core';
import { Qsa } from 'src/app/shared/models/company.model';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  @Input() partners: Qsa[] = [];
  constructor() {}

  ngOnInit(): void {}
}
