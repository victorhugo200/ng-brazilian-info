import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { ListPartnersModule } from './list-partners/list-partners.module';

@NgModule({
  declarations: [PartnersComponent],
  imports: [CommonModule, ListPartnersModule],
  exports: [PartnersComponent],
})
export class PartnersModule {}
