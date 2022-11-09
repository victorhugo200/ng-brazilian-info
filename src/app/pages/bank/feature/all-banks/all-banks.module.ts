import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBanksRoutingModule } from './all-banks-routing.module';
import { AllBanksComponent } from './all-banks.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';

@NgModule({
  declarations: [AllBanksComponent],
  imports: [CommonModule, CardModule, LoadingModule, AllBanksRoutingModule],
  exports: [AllBanksComponent],
})
export class AllBanksModule {}
