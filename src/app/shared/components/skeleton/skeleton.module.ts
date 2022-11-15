import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [SkeletonComponent],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule.forRoot({
      animation: 'pulse',
      loadingText: 'This item is actually loading...',
    }),
  ],
  exports: [SkeletonComponent],
})
export class SkeletonModule {}
