import { Layout1Component } from './layout/layout1/layout1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';

const routes: Routes = [
  {path: '', component:  Layout1Component,   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'User', component:  LayoutBlankComponent,   loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'Reports', component:  Layout1Component,   loadChildren: () => import('./home/reports/reports.module').then(m => m.ReportsModule)},
  {path: 'library', component:  Layout1Component,   loadChildren: () => import('./home/library-policy/library-policy.module').then(m => m.LibraryPolicyModule)},
  {path: 'Merchandising', component:  Layout1Component,   loadChildren: () => import('./home/merchandising/merchandising.module').then(m=>m.MerchandisingModule)},
  {path: 'TNA', component:  Layout1Component,   loadChildren: () => import('./home/tna/tna.module').then(m=>m.TNAModule)},
  {path: 'IE', component:  Layout1Component,   loadChildren: () => import('./home/ie/ie.module').then(m=>m.IeModule)},
  {path: 'Commercial', component:  Layout1Component,   loadChildren: () => import('./home/commercial/commercial.module').then(m=>m.CommercialModule)},
  {path: 'Production', component:  Layout1Component,   loadChildren: () => import('./home/production/production.module').then(m=>m.ProductionModule)},
  {path: 'Accounting', component:  Layout1Component,   loadChildren: () => import('./home/accounting/accounting.module').then(m=>m.AccountingModule)},

  {path: 'Subcontract', component:  Layout1Component,   loadChildren: () => import('./home/subcontract/subcontract.module').then(m=>m.SubcontractModule)},
  {path: 'Inventory', component:  Layout1Component,   loadChildren: () => import('./home/inventory-store/inventory-store.module').then(m=>m.InventoryStoreModule)},
  {path: 'Approval', component:  Layout1Component,   loadChildren: () => import('./home/approval/approval.module').then(m=>m.ApprovalModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
