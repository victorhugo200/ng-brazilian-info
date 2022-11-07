import { Component, Input, OnInit } from '@angular/core';
import { Qsa } from 'src/app/shared/models/company.model';

@Component({
  selector: 'app-list-partners',
  templateUrl: './list-partners.component.html',
  styleUrls: ['./list-partners.component.scss'],
})
export class ListPartnersComponent implements OnInit {
  @Input() partners!: Qsa[];
  constructor() {}

  ngOnInit(): void {}
}
