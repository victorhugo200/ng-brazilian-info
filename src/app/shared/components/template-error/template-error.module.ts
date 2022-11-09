import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateErrorComponent } from './template-error.component';
import { FeedbackModule } from '../feedback/feedback.module';

@NgModule({
  declarations: [TemplateErrorComponent],
  imports: [CommonModule, FeedbackModule],
  exports: [TemplateErrorComponent],
})
export class TemplateErrorModule {}
