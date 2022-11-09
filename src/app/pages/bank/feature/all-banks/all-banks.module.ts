import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBanksRoutingModule } from './all-banks-routing.module';
import { AllBanksComponent } from './all-banks.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { TemplateSkeletonLoaderModule } from 'src/app/shared/components/template-skeleton-loader/template-skeleton-loader.module';
import { ButtonLoadMoreModule } from './components/button-load-more/button-load-more.module';

@NgModule({
  declarations: [AllBanksComponent],
  imports: [
    CommonModule,
    CardModule,
    LoadingModule,
    TemplateSkeletonLoaderModule,
    ButtonLoadMoreModule,
    AllBanksRoutingModule,
  ],
  exports: [AllBanksComponent],
})
export class AllBanksModule {}
