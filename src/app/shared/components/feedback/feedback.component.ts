import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
  @Input() colorIcon: 'primary' | 'warning' | 'danger' = 'primary';
  constructor() {}

  ngOnInit(): void {}

  getColorIcon() {
    switch (this.colorIcon) {
      case 'primary':
        return 'text-primary';
      case 'danger':
        return 'text-danger';
      case 'warning':
        return 'text-warning';
    }
  }
}
