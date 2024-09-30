import { IntegrationSetupComponent } from './integration-setup/integration-setup.component';
import { AccountingYearComponent } from './accounting-year/accounting-year.component';
import { ShareholderComponent } from './shareholder/shareholder.component';
import { JournalSetupComponent } from './journal-setup/journal-setup.component';
import { SupGroupComponent } from './sup-group/sup-group.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Sup-Group', component:  SupGroupComponent},
  {path: 'Journal-Setup', component:  JournalSetupComponent},
  {path: 'Shareholder', component:  ShareholderComponent},
  {path: 'Accounting-Year', component:  AccountingYearComponent},
  {path: 'Integration-Setup', component:  IntegrationSetupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
