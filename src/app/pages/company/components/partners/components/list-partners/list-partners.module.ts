import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ListPartnersComponent } from './list-partners.component';

@NgModule({
  declarations: [ListPartnersComponent],
  imports: [CommonModule, CardModule],
  exports: [ListPartnersComponent],
})
export class ListPartnersModule {}
