import { OrderImportFromExcelComponent } from './order-import-from-excel/order-import-from-excel.component';
import { QuickCostingComponent } from './quick-costing/quick-costing.component';
import { OrderEntryByMatrixComponent } from './order-entry-by-matrix/order-entry-by-matrix.component';
import { UpdateOrderEntryComponent } from './update-order-entry/update-order-entry.component';
import { SampleRequisitionComponent } from './sample-requisition/sample-requisition.component';
import { SimplePriceQuotationComponent } from './simple-price-quotation/simple-price-quotation.component';
import { StripeMeasurementComponent } from './stripe-measurement/stripe-measurement.component';
import { PreCostingComponent } from './pre-costing/pre-costing.component';
import { ColorAndSizeBreakdownComponent } from './color-and-size-breakdown/color-and-size-breakdown.component';
import { OrderEntryListComponent } from './../../../reports/library-rpt/order-entry-list/order-entry-list.component';
import { SmvEntryComponent } from './smv-entry/smv-entry.component';
import { PriceQuotationComponent } from './price-quotation/price-quotation.component';
import { SampleDevelopmentComponent } from './sample-development/sample-development.component';
import { SalesTargetEntryComponent } from './sales-target-entry/sales-target-entry.component';
import { MarketingComponent } from './marketing/marketing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Marketing', component:  MarketingComponent},
  {path: 'Sales-Target-Entry', component:  SalesTargetEntryComponent},
  {path: 'Sample-Development', component:  SampleDevelopmentComponent},
  {path: 'Price-Quotation', component:  PriceQuotationComponent},
  {path: 'SMV-Entry', component:  SmvEntryComponent},
  {path: 'Color-And-Size-Breakdown', component:  ColorAndSizeBreakdownComponent},
  {path: 'Pre-Costing', component:  PreCostingComponent},
  {path: 'Stripe-Measurement', component: StripeMeasurementComponent },
  {path: 'Simple-Price-Quotation', component:  SimplePriceQuotationComponent},
  {path: 'Sample-Requisition', component:  SampleRequisitionComponent},
  {path: 'Update-Order-Entry', component:  UpdateOrderEntryComponent},
  {path: 'Order-Entry-By-Matrix', component: OrderEntryByMatrixComponent },
  {path: 'Quick-Costing', component:  QuickCostingComponent},
  {path: 'Order-Import-From-Excel', component:  OrderImportFromExcelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderTrackingRoutingModule { }
