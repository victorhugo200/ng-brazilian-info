import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent implements OnInit {
  @Input() count = 1;
  @Input() type: 'line' | 'circle' = 'line';
  @Input() theme!: Object;
  @Input() animation: 'pulse' | 'progress' = 'progress';

  constructor() {}

  ngOnInit(): void {}
}
