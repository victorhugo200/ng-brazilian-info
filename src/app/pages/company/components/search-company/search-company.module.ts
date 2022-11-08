import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCompanyComponent } from './search-company.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageErrorModule } from 'src/app/shared/components/message-error/message-error.module';

@NgModule({
  declarations: [SearchCompanyComponent],
  imports: [CommonModule, ReactiveFormsModule, MessageErrorModule],
  exports: [SearchCompanyComponent],
})
export class SearchCompanyModule {}
