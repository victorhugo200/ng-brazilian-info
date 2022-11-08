import { Component, Input, OnInit } from '@angular/core';
import { CnaesSecundario } from 'src/app/shared/models/company.model';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.scss'],
})
export class ListServicesComponent implements OnInit {
  @Input() services!: CnaesSecundario[];
  constructor() {}

  ngOnInit(): void {}
}
