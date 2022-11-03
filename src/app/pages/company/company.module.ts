import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageErrorModule } from 'src/app/shared/components/message-error/message-error.module';
import { TemplateErrorModule } from 'src/app/shared/components/template-error/template-error.module';
import { CnpjPipe } from 'src/app/shared/pipes/cnpj.pipe';

import { CompanyComponent } from './company.component';
import { PartnersModule } from './components/partners/partners.module';
import { ServiceModule } from './components/service/service.module';

@NgModule({
  declarations: [CompanyComponent, CnpjPipe],
  imports: [
    CommonModule,
    ServiceModule,
    PartnersModule,
    ReactiveFormsModule,
    MessageErrorModule,
    TemplateErrorModule,
    RouterModule.forChild([
      {
        path: '',
        component: CompanyComponent,
      },
    ]),
  ],
  exports: [CompanyComponent],
})
export class CompanyModule {}
