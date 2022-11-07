import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListServicesComponent } from './list-services.component';

@NgModule({
  declarations: [ListServicesComponent],
  imports: [CommonModule],
  exports: [ListServicesComponent],
})
export class ListServicesModule {}
