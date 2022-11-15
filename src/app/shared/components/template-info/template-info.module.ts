import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateInfoComponent } from './template-info.component';
import { FeedbackModule } from '../feedback/feedback.module';

@NgModule({
  declarations: [TemplateInfoComponent],
  imports: [CommonModule, FeedbackModule],
  exports: [TemplateInfoComponent],
})
export class TemplateInfoModule {}
