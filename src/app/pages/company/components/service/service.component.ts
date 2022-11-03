import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/models/company.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  @Input() company!: Company;
  constructor() {}

  ngOnInit(): void {}
}
