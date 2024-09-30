import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DyeingAndFinishingChargeComponent } from './dyeing-and-finishing-charge/dyeing-and-finishing-charge.component';
import { KnittingChargeComponent } from './knitting-charge/knitting-charge.component';

const routes: Routes = [
  {path: 'Knitting-Charge', component:  KnittingChargeComponent},
  {path: 'Dyeing-finishing-Charge', component:  DyeingAndFinishingChargeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcontractRoutingModule { }
