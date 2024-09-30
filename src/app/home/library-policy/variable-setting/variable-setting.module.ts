import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariableSettingRoutingModule } from './variable-setting-routing.module';
import { MerchandisingComponent } from './merchandising/merchandising.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ProductionComponent } from './production/production.component';
import { InventoryComponent } from './inventory/inventory.component';
import { VariableSettingAccountingComponent } from './variable-setting-accounting/variable-setting-accounting.component';
import { SubcontractComponent } from './subcontract/subcontract.component';
import { ReportSettingComponent } from './report-setting/report-setting.component';
import { ReportSignatureComponent } from './report-signature/report-signature.component';
import { DatabaseIntegrationComponent } from './database-integration/database-integration.component';


@NgModule({
  declarations: [  
    MerchandisingComponent, CommercialComponent, ProductionComponent, InventoryComponent, VariableSettingAccountingComponent, SubcontractComponent, ReportSettingComponent, ReportSignatureComponent, DatabaseIntegrationComponent
  ],
  imports: [
    CommonModule,
    VariableSettingRoutingModule
  ]
})
export class VariableSettingModule { }
