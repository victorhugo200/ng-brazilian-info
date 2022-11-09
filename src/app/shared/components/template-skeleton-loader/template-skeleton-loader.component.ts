import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SkeletonWidth } from '../../models/template-skeleton-loader.model';

@Component({
  selector: 'app-template-skeleton-loader',
  templateUrl: './template-skeleton-loader.component.html',
  styleUrls: ['./template-skeleton-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSkeletonLoaderComponent implements OnInit {
  @Input() totalCols = 10;
  @Input() skeletonWidth: SkeletonWidth = {
    first: '100%',
    secondary: '50%',
  };
  cols: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.getCols();
  }

  private getCols() {
    for (let index = 0; index < this.totalCols; index++) {
      this.cols.push(index);
    }
  }
}
