import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-info',
  templateUrl: './template-info.component.html',
  styleUrls: ['./template-info.component.scss']
})
export class TemplateInfoComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
