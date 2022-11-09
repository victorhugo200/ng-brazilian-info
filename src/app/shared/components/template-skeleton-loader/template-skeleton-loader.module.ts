import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateSkeletonLoaderComponent } from './template-skeleton-loader.component';
import { CardModule } from '../card/card.module';
import { SkeletonModule } from '../skeleton/skeleton.module';

@NgModule({
  declarations: [TemplateSkeletonLoaderComponent],
  imports: [CommonModule, CardModule, SkeletonModule],
  exports: [TemplateSkeletonLoaderComponent],
})
export class TemplateSkeletonLoaderModule {}
