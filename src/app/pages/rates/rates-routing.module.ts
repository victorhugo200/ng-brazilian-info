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
        path: 'abbreviation',
        loadChildren: () =>
          import('./feature/abbreviation/abbreviation.module').then(
            (m) => m.AbbreviationModule
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
