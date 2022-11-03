import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageErrorComponent implements OnInit {
  @Input() text!: string;
  constructor() {}

  ngOnInit(): void {}
}
