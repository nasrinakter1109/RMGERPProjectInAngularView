import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component:  DashboardComponent},
  {path: 'Management-Rpt',  loadChildren: () => import('./management-rpt/management-rpt.module').then(m => m.ManagementRptModule)},
  {path: 'Library-Rpt',  loadChildren: () => import('./library-rpt/library-rpt.module').then(m => m.LibraryRptModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
