import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [  {path: 'dashboard', component:  DashboardComponent},
{path: 'Garments',  loadChildren: () => import('./garments/garments.module').then(m => m.GarmentsModule)},
{path: 'Report',  loadChildren: () => import('./report/report.module').then(m => m.ReportModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchandisingRoutingModule { }
