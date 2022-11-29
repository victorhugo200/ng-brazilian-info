import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Abbreviation } from '../../enums/abbreviation';
import { Rate } from '../../models/rates.model';
import { RatesService } from '../../services/rates.service';

@Component({
  selector: 'app-abbreviation',
  templateUrl: './abbreviation.component.html',
  styleUrls: ['./abbreviation.component.scss'],
})
export class AbbreviationComponent implements OnInit {
  public selectAbbreviation = new FormControl(Abbreviation.CDI);
  public rate!: Rate;
  public abbreviations = [
    {
      name: 'CDI',
      value: Abbreviation.CDI,
    },
    {
      name: 'IPCA',
      value: Abbreviation.IPCA,
    },
    {
      name: 'SELIC',
      value: Abbreviation.SELIC,
    },
  ];
  public hasError = false;
  constructor(private rateService: RatesService) {}

  ngOnInit(): void {
    this.getRatesAbbreviation(Abbreviation.CDI);
    this.onSelected();
  }

  private onSelected() {
    this.selectAbbreviation.valueChanges.subscribe((abbreviation) => {
      this.getRatesAbbreviation(abbreviation);
    });
  }

  getRatesAbbreviation(abbreviation: Abbreviation) {
    this.rateService.getRatesAbbreviation(abbreviation).subscribe(
      (rate) => {
        this.rate = rate;
        this.hasError = false;
      },
      (error) => {
        this.hasError = true;
      }
    );
  }
}
