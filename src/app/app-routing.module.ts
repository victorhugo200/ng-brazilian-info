import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./pages/company/company.module').then((m) => m.CompanyModule),
  },
  {
    path: 'bank',
    loadChildren: () =>
      import('./pages/bank/bank.module').then((m) => m.BankModule),
  },
  {
    path: 'rates',
    loadChildren: () =>
      import('./pages/rates/rates.module').then((m) => m.RatesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
