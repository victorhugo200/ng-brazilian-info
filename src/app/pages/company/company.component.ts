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
  company$!: Observable<Company>;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.controlCNPJ.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter(() => this.controlCNPJ.valid),
        map((val: string) => {
          this.isLoading = true;
          this.emptyInfo = false;
          const cnpj = val.replace(/[^0-9]/g, '');
          return cnpj;
        })
      )
      .subscribe((cnpj) => {
        this.company$ = this.companyService.getCompany(cnpj);
        this.isLoading = false;
      });
  }
}
