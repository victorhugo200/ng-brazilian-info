import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { SkeletonWidth } from 'src/app/shared/models/template-skeleton-loader.model';
import { Rate } from '../../models/rates.model';
import { RatesService } from '../../services/rates.service';

@Component({
  selector: 'app-all-rates',
  templateUrl: './all-rates.component.html',
  styleUrls: ['./all-rates.component.scss'],
})
export class AllRatesComponent implements OnInit {
  public rates: Rate[] = [];
  public skeletonWidth: SkeletonWidth = {
    first: '20%',
    secondary: '50%',
  };
  public showLoader = true;
  public hasError = false;

  constructor(private ratesService: RatesService) {}

  ngOnInit(): void {
    this.ratesService
      .getRates()
      .pipe(delay(3000))
      .subscribe(
        (rates) => {
          this.rates = rates;
          this.showLoader = false;
          this.hasError = false;
        },
        (error) => {
          this.showLoader = false;
          this.hasError = true;
        }
      );
  }
}
