import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        loadChildren: () =>
          import('./feature/all-banks/all-banks.module').then(
            (m) => m.AllBanksModule
          ),
      },
      {
        path: '',
        redirectTo: 'all',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankRoutingModule {}
