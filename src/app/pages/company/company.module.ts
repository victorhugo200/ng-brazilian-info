import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { TemplateErrorModule } from 'src/app/shared/components/template-error/template-error.module';
import { CnpjPipe } from 'src/app/shared/pipes/cnpj.pipe';

import { CompanyComponent } from './company.component';
import { PartnersModule } from './components/partners/partners.module';
import { SearchCompanyModule } from './components/search-company/search-company.module';
import { ServiceModule } from './components/service/service.module';

@NgModule({
  declarations: [CompanyComponent, CnpjPipe],
  imports: [
    CommonModule,
    ServiceModule,
    PartnersModule,
    TemplateErrorModule,
    LoadingModule,
    SearchCompanyModule,
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
