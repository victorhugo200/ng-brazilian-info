import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { InfoRoutingModule } from './info-routing.module';
import { InputSearchModule } from 'src/app/shared/components/input-search/input-search.module';
import { SkeletonModule } from 'src/app/shared/components/skeleton/skeleton.module';
import { FeedbackModule } from 'src/app/shared/components/feedback/feedback.module';
import { TemplateErrorModule } from 'src/app/shared/components/template-error/template-error.module';
import { LoaderModule } from './components/loader/loader.module';
import { TemplateInfoModule } from 'src/app/shared/components/template-info/template-info.module';

@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    CardModule,
    InputSearchModule,
    SkeletonModule,
    InfoRoutingModule,
    FeedbackModule,
    TemplateErrorModule,
    TemplateInfoModule,
    LoaderModule,
  ],
  exports: [InfoComponent],
})
export class InfoModule {}
