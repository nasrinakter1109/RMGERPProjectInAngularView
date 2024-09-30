import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { SupGroupComponent } from './sup-group/sup-group.component';
import { JournalSetupComponent } from './journal-setup/journal-setup.component';
import { ShareholderComponent } from './shareholder/shareholder.component';
import { AccountingYearComponent } from './accounting-year/accounting-year.component';
import { IntegrationSetupComponent } from './integration-setup/integration-setup.component';


@NgModule({
  declarations: [
    SupGroupComponent,
    JournalSetupComponent,
    ShareholderComponent,
    AccountingYearComponent,
    IntegrationSetupComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule
  ]
})
export class AccountingModule { }
