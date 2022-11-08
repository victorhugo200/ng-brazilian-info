import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { ListServicesModule } from './components/list-services/list-services.module';

@NgModule({
  declarations: [ServiceComponent],
  imports: [CommonModule, ListServicesModule],
  exports: [ServiceComponent],
})
export class ServiceModule {}
