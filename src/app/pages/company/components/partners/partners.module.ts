import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { ListPartnersModule } from './components/list-partners/list-partners.module';
import { TemplateSkeletonLoaderModule } from 'src/app/shared/components/template-skeleton-loader/template-skeleton-loader.module';

@NgModule({
  declarations: [PartnersComponent],
  imports: [CommonModule, ListPartnersModule, TemplateSkeletonLoaderModule],
  exports: [PartnersComponent],
})
export class PartnersModule {}
