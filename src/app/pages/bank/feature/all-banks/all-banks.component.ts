import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { Bank } from '../../model/bank.model';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-all-banks',
  templateUrl: './all-banks.component.html',
  styleUrls: ['./all-banks.component.scss'],
})
export class AllBanksComponent implements OnInit {
  banks: Bank[] = [];
  allBanks: Bank[] = [];
  isLoading = false;
  totalItems = 3;
  page = 1;
  showTemplateLoadMore = false;
  showButtonLoadMore = false;
  constructor(private bankService: BankService) {}

  ngOnInit(): void {
    this.isLoading = true;
    console.log(this.banks);
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
        }
      );
  }

  async loadMore() {
    this.page++;
    this.showButtonLoadMore = this.hasBanks();
    this.showTemplateLoadMore = true;
    await setTimeout(() => {
      this.banks = [...this.banks, ...this.paginate(this.page, this.allBanks)];
      this.showTemplateLoadMore = false;
    }, 1000);
  }

  private paginate(page: number, list: Bank[]) {
    return list.slice((page - 1) * this.totalItems, page * this.totalItems);
  }

  private hasBanks() {
    return this.paginate(this.page, this.allBanks).length ? true : false;
  }
}
