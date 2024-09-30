import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchandisingRptRoutingModule } from './merchandising-rpt-routing.module';
import { ShipmentScheduleComponent } from './shipment-schedule/shipment-schedule.component';
import { PriceQuotationStatementComponent } from './price-quotation-statement/price-quotation-statement.component';
import { CostBreakdownReportComponent } from './cost-breakdown-report/cost-breakdown-report.component';
import { ShipmentPendingReportComponent } from './shipment-pending-report/shipment-pending-report.component';
import { WorkProgressReportComponent } from './work-progress-report/work-progress-report.component';
import { CapacityAndOrderBookingStatusComponent } from './capacity-and-order-booking-status/capacity-and-order-booking-status.component';
import { CapacityAllocationPrintComponent } from './capacity-allocation-print/capacity-allocation-print.component';
import { MonthlyCapacityAndOrderQtyComponent } from './monthly-capacity-and-order-qty/monthly-capacity-and-order-qty.component';
import { ShipmenScheduleForManagementComponent } from './shipmen-schedule-for-management/shipmen-schedule-for-management.component';
import { DailyExFectoryReportComponent } from './daily-ex-fectory-report/daily-ex-fectory-report.component';
import { OrderStatusReportComponent } from './order-status-report/order-status-report.component';
import { WeeklyCapacityAndOrderBookingStatusComponent } from './weekly-capacity-and-order-booking-status/weekly-capacity-and-order-booking-status.component';
import { SmvVsPriceAnalysisReportComponent } from './smv-vs-price-analysis-report/smv-vs-price-analysis-report.component';
import { OrderWiseBudgetReportComponent } from './order-wise-budget-report/order-wise-budget-report.component';
import { BuyerInqueryReportComponent } from './buyer-inquery-report/buyer-inquery-report.component';
import { DateWiseShipmentStatusComponent } from './date-wise-shipment-status/date-wise-shipment-status.component';
import { ProcessLossReportComponent } from './process-loss-report/process-loss-report.component';
import { CpaShortFabricBookingAnalysisReportComponent } from './cpa-short-fabric-booking-analysis-report/cpa-short-fabric-booking-analysis-report.component';
import { OrderForcastingReportComponent } from './order-forcasting-report/order-forcasting-report.component';
import { StyleClosingReportComponent } from './style-closing-report/style-closing-report.component';
import { PostCostingReportComponent } from './post-costing-report/post-costing-report.component';


@NgModule({
  declarations: [
    ShipmentScheduleComponent,
    PriceQuotationStatementComponent,
    CostBreakdownReportComponent,
    ShipmentPendingReportComponent,
    WorkProgressReportComponent,
    CapacityAndOrderBookingStatusComponent,
    CapacityAllocationPrintComponent,
    MonthlyCapacityAndOrderQtyComponent,
    ShipmenScheduleForManagementComponent,
    DailyExFectoryReportComponent,
    OrderStatusReportComponent,
    WeeklyCapacityAndOrderBookingStatusComponent,
    SmvVsPriceAnalysisReportComponent,
    OrderWiseBudgetReportComponent,
    BuyerInqueryReportComponent,
    DateWiseShipmentStatusComponent,
    ProcessLossReportComponent,
    CpaShortFabricBookingAnalysisReportComponent,
    OrderForcastingReportComponent,
    StyleClosingReportComponent,
    PostCostingReportComponent
  ],
  imports: [
    CommonModule,
    MerchandisingRptRoutingModule
  ]
})
export class MerchandisingRptModule { }
