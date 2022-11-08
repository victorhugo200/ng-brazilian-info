import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBanksRoutingModule } from './all-banks-routing.module';
import { AllBanksComponent } from './all-banks.component';

@NgModule({
  declarations: [AllBanksComponent],
  imports: [CommonModule, AllBanksRoutingModule],
  exports: [AllBanksComponent],
})
export class AllBanksModule {}
