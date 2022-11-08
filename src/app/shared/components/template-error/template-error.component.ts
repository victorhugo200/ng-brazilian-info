import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-template-error',
  templateUrl: './template-error.component.html',
  styleUrls: ['./template-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateErrorComponent implements OnInit {
  @Input() text!: string;
  constructor() {}

  ngOnInit(): void {}
}
