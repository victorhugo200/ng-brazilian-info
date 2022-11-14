import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, delay } from 'rxjs';
import { Bank } from '../../model/bank.model';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {
  public search = new FormControl('', Validators.required);
  public isLoading = false;
  public info!: Bank;
  public showTemplateError = false;
  public feedback = {
    show: true,
    title: 'Busque um banco',
    description: 'Busque informações de um banco a partir do seu código.',
    icon: 'bi-info-circle',
  };

  constructor(private bankService: BankService) {}

  ngOnInit(): void {
    this.onValueChanges();
  }

  getInfoBank(code: string) {
    this.bankService
      .getBank(code)
      .pipe(delay(1000))
      .subscribe(
        (res) => {
          this.info = res;
          this.isLoading = false;
        },
        (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.isLoading = false;
            this.feedback.title = 'Parece que este banco não existe!';
            this.feedback.description =
              'Por favor, verifique o código do banco digitado e faça uma nova consulta.';
            this.feedback.show = true;
            this.showTemplateError = false;
          } else {
            this.isLoading = false;
            this.feedback.show = false;
            this.showTemplateError = true;
          }
        }
      );
  }

  onValueChanges() {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((code: string) => {
        this.info = null as any;
        this.feedback.show = false;
        this.isLoading = true;
        if (code.length) {
          this.getInfoBank(code);
        } else {
          this.isLoading = false;
          this.feedback = {
            show: true,
            title: 'Busque um banco',
            description:
              'Busque informações de um banco a partir do seu código.',
            icon: 'bi-info-circle',
          };
        }
      });
  }
}
