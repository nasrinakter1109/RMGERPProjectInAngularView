import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing.module';
import { ProductionFloorComponent } from './production-floor/production-floor.component';
import { SewingLineComponent } from './sewing-line/sewing-line.component';
import { SewingOperationComponent } from './sewing-operation/sewing-operation.component';
import { WagesRateVariableComponent } from './wages-rate-variable/wages-rate-variable.component';
import { IncentiveSchemeComponent } from './incentive-scheme/incentive-scheme.component';
import { MachineEntryComponent } from './machine-entry/machine-entry.component';


@NgModule({
  declarations: [
    ProductionFloorComponent,
    SewingLineComponent,
    SewingOperationComponent,
    WagesRateVariableComponent,
    IncentiveSchemeComponent,
    MachineEntryComponent
  ],
  imports: [
    CommonModule,
    ProductionRoutingModule
  ]
})
export class ProductionModule { }
