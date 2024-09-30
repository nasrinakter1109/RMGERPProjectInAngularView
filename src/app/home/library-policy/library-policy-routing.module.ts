import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [  {path: 'dashboard', component:  DashboardComponent},
{path: 'Contact-Details',  loadChildren: () => import('./contact-details/contact-details.module').then(m => m.ContactDetailsModule)},
{path: 'Item-Details',  loadChildren: () => import('./item-details/item-details.module').then(m => m.ItemDetailsModule)},
{path: 'Merchandising-details',  loadChildren: () => import('./merchanding-details/merchanding-details.module').then(m => m.MerchandingDetailsModule)},
{path: 'Cost-Center',  loadChildren: () => import('./cost-center/cost-center.module').then(m => m.CostCenterModule)},
{path: 'Production',  loadChildren: () => import('./production/production.module').then(m => m.ProductionModule)},
{path: 'Subcontract',  loadChildren: () => import('./subcontract/subcontract.module').then(m => m.SubcontractModule)},
{path: 'Accounting',  loadChildren: () => import('./accounting/accounting.module').then(m => m.AccountingModule)},
{path: 'Variable-Setting',  loadChildren: () => import('./variable-setting/variable-setting.module').then(m => m.VariableSettingModule)},
{path: 'General',  loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryPolicyRoutingModule { }
