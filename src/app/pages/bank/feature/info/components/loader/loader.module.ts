import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonModule } from 'src/app/shared/components/skeleton/skeleton.module';
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, SkeletonModule],
  exports: [LoaderComponent],
})
export class LoaderModule {}
