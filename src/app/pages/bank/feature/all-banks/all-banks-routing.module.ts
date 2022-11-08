import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBanksComponent } from './all-banks.component';

const routes: Routes = [
  {
    path: '',
    component: AllBanksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllBanksRoutingModule {}
