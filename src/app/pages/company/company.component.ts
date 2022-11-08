import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  catchError,
  debounceTime,
  delay,
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
  isLoading = false;
  emptyInfo = true;
  hasError = false;
  company!: Company | undefined;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {}

  getCompany(cnpj: string) {
    this.emptyInfo = false;
    this.company = undefined;
    this.isLoading = true;
    this.companyService
      .getCompany(cnpj)
      .pipe(delay(300))
      .subscribe(
        (res) => {
          this.company = res;
          this.isLoading = false;
          this.hasError = false;
        },
        (error) => {
          this.hasError = true;
          this.isLoading = false;
        }
      );
  }
}
