import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderTrackingRoutingModule } from './order-tracking-routing.module';
import { MarketingComponent } from './marketing/marketing.component';
import { SalesTargetEntryComponent } from './sales-target-entry/sales-target-entry.component';
import { SampleDevelopmentComponent } from './sample-development/sample-development.component';
import { PriceQuotationComponent } from './price-quotation/price-quotation.component';
import { SmvEntryComponent } from './smv-entry/smv-entry.component';
import { ColorAndSizeBreakdownComponent } from './color-and-size-breakdown/color-and-size-breakdown.component';
import { PreCostingComponent } from './pre-costing/pre-costing.component';
import { StripeMeasurementComponent } from './stripe-measurement/stripe-measurement.component';
import { SimplePriceQuotationComponent } from './simple-price-quotation/simple-price-quotation.component';
import { SampleRequisitionComponent } from './sample-requisition/sample-requisition.component';
import { UpdateOrderEntryComponent } from './update-order-entry/update-order-entry.component';
import { QuickCostingComponent } from './quick-costing/quick-costing.component';
import { OrderImportFromExcelComponent } from './order-import-from-excel/order-import-from-excel.component';
import { OrderEntryByMatrixComponent } from './order-entry-by-matrix/order-entry-by-matrix.component';


@NgModule({
  declarations: [
    MarketingComponent,
    SalesTargetEntryComponent,
    SampleDevelopmentComponent,
    PriceQuotationComponent,
    SmvEntryComponent,
    ColorAndSizeBreakdownComponent,
    PreCostingComponent,
    StripeMeasurementComponent,
    SimplePriceQuotationComponent,
    SampleRequisitionComponent,
    UpdateOrderEntryComponent,
    QuickCostingComponent,
    OrderImportFromExcelComponent,
    OrderEntryByMatrixComponent
  ],
  imports: [
    CommonModule,
    OrderTrackingRoutingModule
  ]
})
export class OrderTrackingModule { }
