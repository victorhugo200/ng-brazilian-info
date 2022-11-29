import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRatesComponent } from './all-rates.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { TemplateSkeletonLoaderModule } from 'src/app/shared/components/template-skeleton-loader/template-skeleton-loader.module';
import { TemplateErrorModule } from 'src/app/shared/components/template-error/template-error.module';

@NgModule({
  declarations: [AllRatesComponent],
  imports: [
    CommonModule,
    CardModule,
    TemplateSkeletonLoaderModule,
    TemplateErrorModule,
    RouterModule.forChild([
      {
        path: '',
        component: AllRatesComponent,
      },
    ]),
  ],
  exports: [AllRatesComponent],
})
export class AllRatesModule {}
