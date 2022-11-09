import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBanksRoutingModule } from './all-banks-routing.module';
import { AllBanksComponent } from './all-banks.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { TemplateSkeletonLoaderModule } from 'src/app/shared/components/template-skeleton-loader/template-skeleton-loader.module';
import { ButtonLoadMoreModule } from './components/button-load-more/button-load-more.module';
import { InputSearchModule } from 'src/app/shared/components/input-search/input-search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackModule } from 'src/app/shared/components/feedback/feedback.module';
import { TemplateErrorModule } from 'src/app/shared/components/template-error/template-error.module';

@NgModule({
  declarations: [AllBanksComponent],
  imports: [
    CommonModule,
    CardModule,
    LoadingModule,
    TemplateSkeletonLoaderModule,
    ButtonLoadMoreModule,
    InputSearchModule,
    ReactiveFormsModule,
    FeedbackModule,
    TemplateErrorModule,
    AllBanksRoutingModule,
  ],
  exports: [AllBanksComponent],
})
export class AllBanksModule {}
