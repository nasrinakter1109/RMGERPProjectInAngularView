import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcontractRoutingModule } from './subcontract-routing.module';
import { KnittingChargeComponent } from './knitting-charge/knitting-charge.component';
import { DyeingAndFinishingChargeComponent } from './dyeing-and-finishing-charge/dyeing-and-finishing-charge.component';


@NgModule({
  declarations: [
    KnittingChargeComponent,
       DyeingAndFinishingChargeComponent],
  imports: [
    CommonModule,
    SubcontractRoutingModule
  ]
})
export class SubcontractModule { }
