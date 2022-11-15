import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        loadChildren: () =>
          import('./feature/all-rates/all-rates.module').then(
            (m) => m.AllRatesModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatesRoutingModule {}
