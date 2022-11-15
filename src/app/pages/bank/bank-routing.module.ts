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
        path: 'info',
        loadChildren: () =>
          import('./feature/info/info.module').then((m) => m.InfoModule),
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
