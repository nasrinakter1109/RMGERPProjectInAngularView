import { ReportSignatureComponent } from './report-signature/report-signature.component';
import { ReportSettingComponent } from './report-setting/report-setting.component';
import { SubcontractComponent } from './subcontract/subcontract.component';
import { VariableSettingAccountingComponent } from './variable-setting-accounting/variable-setting-accounting.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductionComponent } from './production/production.component';
import { CommercialComponent } from './commercial/commercial.component';
import { MerchandisingComponent } from './merchandising/merchandising.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseIntegrationComponent } from './database-integration/database-integration.component';

const routes: Routes = [
  {path: 'Merchanding', component:  MerchandisingComponent},
  {path: 'Commercial', component:  CommercialComponent},
  {path: 'Production', component:  ProductionComponent},
  {path: 'Inventory', component:  InventoryComponent},
  {path: 'Accounting', component:  VariableSettingAccountingComponent},
  {path: 'Subcontract', component:  SubcontractComponent},
  {path: 'Report-Setting', component:  ReportSettingComponent},
  {path: 'Report-Signature', component:  ReportSignatureComponent},
  {path: 'Database-Integration', component:  DatabaseIntegrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariableSettingRoutingModule { }
