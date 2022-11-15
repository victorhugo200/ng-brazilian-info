import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, delay, tap } from 'rxjs';
import { Bank } from '../../model/bank.model';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-all-banks',
  templateUrl: './all-banks.component.html',
  styleUrls: ['./all-banks.component.scss'],
})
export class AllBanksComponent implements OnInit {
  public search = new FormControl('');
  public banks: Bank[] = [];
  public allBanks: Bank[] = [];
  public isLoading = false;
  public totalItems = 12;
  public page = 1;
  public showTemplateLoadMore = false;
  public showButtonLoadMore = false;
  public hasError = false;

  constructor(private bankService: BankService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getAllBanks();
    this.onFilterBanks();
  }

  async loadMore() {
    this.page++;
    this.showButtonLoadMore = false;
    this.showTemplateLoadMore = true;
    await setTimeout(() => {
      this.banks = [...this.banks, ...this.paginate(this.page, this.allBanks)];
      this.showButtonLoadMore = this.hasBanks();
      this.showTemplateLoadMore = false;
    }, 2000);
  }

  paginate(page: number, list: Bank[]) {
    return list.slice((page - 1) * this.totalItems, page * this.totalItems);
  }

  hasBanks() {
    return this.paginate(this.page, this.allBanks).length ? true : false;
  }

  onFilterBanks() {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string) => {
        const valueFormat = this.convertToLowerCase(value);
        this.isLoading = true;
        this.page = 1;
        setTimeout(() => {
          if (value.length) {
            this.showButtonLoadMore = false;
            const banksFiltered = this.filterBanks(valueFormat);
            this.banks = banksFiltered;
            this.isLoading = false;
          } else {
            this.banks = this.paginate(this.page, this.allBanks);
            this.showButtonLoadMore = this.hasBanks();
            this.isLoading = false;
          }
        }, 500);
      });
  }

  filterBanks(value: string) {
    return this.allBanks.filter(({ name, fullName, ispb }) => {
      const nameFormat = this.convertToLowerCase(name);
      const fullNameFormat = this.convertToLowerCase(fullName);
      return (
        this.includesValue(nameFormat, value) ||
        this.includesValue(fullNameFormat, value) ||
        this.includesValue(ispb, value)
      );
    });
  }

  convertToLowerCase(text: string) {
    return text.toLowerCase();
  }

  includesValue(text: string, value: any) {
    return text.includes(value);
  }

  getAllBanks() {
    this.bankService
      .getAllBanks()
      .pipe(delay(300))
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.allBanks = res;
          this.showButtonLoadMore = this.hasBanks();
          this.banks = this.paginate(this.page, res);
        },
        (error) => {
          this.isLoading = false;
          this.hasError = true;
        }
      );
  }
}
