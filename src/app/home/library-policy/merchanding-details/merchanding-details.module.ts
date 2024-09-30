import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchandingDetailsRoutingModule } from './merchanding-details-routing.module';
import { YarnCompositionEntryComponent } from './yarn-composition-entry/yarn-composition-entry.component';
import { YarnCountDeterminationComponent } from './yarn-count-determination/yarn-count-determination.component';
import { TrimsCostingTemplateComponent } from './trims-costing-template/trims-costing-template.component';
import { ProcesCostRateSetupComponent } from './proces-cost-rate-setup/proces-cost-rate-setup.component';
import { TnaTaskEntryComponent } from './tna-task-entry/tna-task-entry.component';
import { GarmentsSampleEntryComponent } from './garments-sample-entry/garments-sample-entry.component';
import { MarketingTeamInfoComponent } from './marketing-team-info/marketing-team-info.component';
import { FinancialParameterSetupComponent } from './financial-parameter-setup/finacial-parameter-setup.component';
import { CapacityCalculationComponent } from './capacity-calculation/capacity-calculation.component';
import { CapacityAllocationComponent } from './capacity-allocation/capacity-allocation.component';
import { ProductSubDepartmentComponent } from './product-sub-department/product-sub-department.component';
import { ColorEntryComponent } from './color-entry/color-entry.component';


@NgModule({
  declarations: [
    YarnCompositionEntryComponent,
    YarnCountDeterminationComponent,
    TrimsCostingTemplateComponent,
    ProcesCostRateSetupComponent,
    TnaTaskEntryComponent,
    GarmentsSampleEntryComponent,
    MarketingTeamInfoComponent,
    FinancialParameterSetupComponent,
    CapacityCalculationComponent,
    CapacityAllocationComponent,
    ProductSubDepartmentComponent,
    ColorEntryComponent
  ],
  imports: [
    CommonModule,
    MerchandingDetailsRoutingModule
  ]
})
export class MerchandingDetailsModule { }
