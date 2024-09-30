import { MachineEntryComponent } from './machine-entry/machine-entry.component';
import { IncentiveSchemeComponent } from './incentive-scheme/incentive-scheme.component';
import { WagesRateVariableComponent } from './wages-rate-variable/wages-rate-variable.component';
import { SewingOperationComponent } from './sewing-operation/sewing-operation.component';
import { SewingLineComponent } from './sewing-line/sewing-line.component';
import { ProductionFloorComponent } from './production-floor/production-floor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Production-Floor', component:  ProductionFloorComponent},
  {path: 'Sewing-Line', component:  SewingLineComponent},
  {path: 'Sewing-Operation', component:  SewingOperationComponent},
  {path: 'Wages-Rate-Variable', component:  WagesRateVariableComponent},
  {path: 'Incentive-Scheme', component:  IncentiveSchemeComponent},
  {path: 'Machine-Entry', component:  MachineEntryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
