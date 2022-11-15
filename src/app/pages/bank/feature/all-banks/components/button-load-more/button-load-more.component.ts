import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-load-more',
  templateUrl: './button-load-more.component.html',
  styleUrls: ['./button-load-more.component.scss'],
})
export class ButtonLoadMoreComponent implements OnInit {
  @Input() isLoadMore = false;
  @Output() loadMore = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
