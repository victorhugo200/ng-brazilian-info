import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  tap,
} from 'rxjs';
import { Company } from 'src/app/shared/models/company.model';
import { cnpjValidator } from 'src/app/shared/validators/cnpj.validator';
import { CompanyService } from './services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [CompanyService],
})
export class CompanyComponent implements OnInit {
  controlCNPJ = new FormControl('', [Validators.required, cnpjValidator()]);
  isLoading = false;
  emptyInfo = true;
  hasError = false;
  company$!: Observable<Company | any>;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.controlCNPJ.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter(() => this.controlCNPJ.valid),
        map((val: string) => {
          this.emptyInfo = false;
          const cnpj = val.replace(/[^0-9]/g, '').trim();
          return cnpj;
        }),
        tap(() => {
          this.isLoading = true;
        })
      )
      .subscribe((cnpj) => {
        this.company$ = this.companyService.getCompany(cnpj).pipe(
          catchError((error) => {
            this.hasError = true;
            return error;
          })
        );
        setTimeout(() => (this.isLoading = false), 200);
      });
  }
}
