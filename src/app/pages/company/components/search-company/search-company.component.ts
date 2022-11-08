import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { cnpjValidator } from 'src/app/shared/validators/cnpj.validator';

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.scss'],
})
export class SearchCompanyComponent implements OnInit {
  search = new FormControl('', [Validators.required, cnpjValidator()]);
  @Output() cnpjEmitter = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter(() => this.search.valid),
        map((val: string) => {
          const cnpj = val.replace(/[^0-9]/g, '').trim();
          return cnpj;
        })
      )
      .subscribe((cnpj) => {
        this.cnpjEmitter.emit(cnpj);
      });
  }
}
