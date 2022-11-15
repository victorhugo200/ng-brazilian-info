import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() search!: FormControl;
  constructor() {}

  ngOnInit(): void {}
}
