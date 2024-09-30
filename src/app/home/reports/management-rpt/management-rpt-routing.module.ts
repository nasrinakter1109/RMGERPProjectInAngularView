import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Merchandising-Rpt',  loadChildren: () => import('./merchandising-rpt/merchandising-rpt.module').then(m => m.MerchandisingRptModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRptRoutingModule { }
