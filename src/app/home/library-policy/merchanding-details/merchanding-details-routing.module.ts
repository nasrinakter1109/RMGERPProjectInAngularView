import { ColorEntryComponent } from './color-entry/color-entry.component';
import { ProductSubDepartmentComponent } from './product-sub-department/product-sub-department.component';
import { CapacityCalculationComponent } from './capacity-calculation/capacity-calculation.component';
import {  FinancialParameterSetupComponent } from './financial-parameter-setup/finacial-parameter-setup.component';
import { MarketingTeamInfoComponent } from './marketing-team-info/marketing-team-info.component';
import { GarmentsSampleEntryComponent } from './garments-sample-entry/garments-sample-entry.component';
import { TnaTaskEntryComponent } from './tna-task-entry/tna-task-entry.component';
import { ProcesCostRateSetupComponent } from './proces-cost-rate-setup/proces-cost-rate-setup.component';
import { TrimsCostingTemplateComponent } from './trims-costing-template/trims-costing-template.component';
import { YarnCountDeterminationComponent } from './yarn-count-determination/yarn-count-determination.component';
import { YarnCompositionEntryComponent } from './yarn-composition-entry/yarn-composition-entry.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacityAllocationComponent } from './capacity-allocation/capacity-allocation.component';

const routes: Routes = [
  {path: 'Yarn-Composition-Entry', component:  YarnCompositionEntryComponent},
  {path: 'Yarn-Count-Determination', component:  YarnCountDeterminationComponent},
  {path: 'Trims-Costing-Template', component:  TrimsCostingTemplateComponent},
  {path: 'Proces-Cost-Rate-Setup', component:  ProcesCostRateSetupComponent},
  {path: 'Tna-Task-Entry', component:  TnaTaskEntryComponent},
  {path: 'Garments-Sample-Entry', component:  GarmentsSampleEntryComponent},
  {path: 'Marketing-Team-Info', component:  MarketingTeamInfoComponent},
  {path: 'Financial-Parameter-Setup', component:  FinancialParameterSetupComponent},
  {path: 'Capacity-Calculation', component: CapacityCalculationComponent },
  {path: 'Capacity-Allocation', component:  CapacityAllocationComponent},
  {path: 'Product-Sub-Department', component:  ProductSubDepartmentComponent},
  {path: 'Color-Entry', component:  ColorEntryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchandingDetailsRoutingModule { }
