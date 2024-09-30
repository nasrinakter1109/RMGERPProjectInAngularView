import { PostCostingReportComponent } from './post-costing-report/post-costing-report.component';
import { StyleClosingReportComponent } from './style-closing-report/style-closing-report.component';
import { OrderForcastingReportComponent } from './order-forcasting-report/order-forcasting-report.component';
import { CpaShortFabricBookingAnalysisReportComponent } from './cpa-short-fabric-booking-analysis-report/cpa-short-fabric-booking-analysis-report.component';
import { ProcessLossReportComponent } from './process-loss-report/process-loss-report.component';
import { DateWiseShipmentStatusComponent } from './date-wise-shipment-status/date-wise-shipment-status.component';
import { BuyerInqueryReportComponent } from './buyer-inquery-report/buyer-inquery-report.component';
import { OrderWiseBudgetReportComponent } from './order-wise-budget-report/order-wise-budget-report.component';
import { SmvVsPriceAnalysisReportComponent } from './smv-vs-price-analysis-report/smv-vs-price-analysis-report.component';
import { WeeklyCapacityAndOrderBookingStatusComponent } from './weekly-capacity-and-order-booking-status/weekly-capacity-and-order-booking-status.component';
import { OrderStatusReportComponent } from './order-status-report/order-status-report.component';
import { DailyExFectoryReportComponent } from './daily-ex-fectory-report/daily-ex-fectory-report.component';
import { MonthlyCapacityAndOrderQtyComponent } from './monthly-capacity-and-order-qty/monthly-capacity-and-order-qty.component';
import { CapacityAllocationPrintComponent } from './capacity-allocation-print/capacity-allocation-print.component';
import { CapacityAndOrderBookingStatusComponent } from './capacity-and-order-booking-status/capacity-and-order-booking-status.component';
import { WorkProgressReportComponent } from './work-progress-report/work-progress-report.component';
import { ShipmentPendingReportComponent } from './shipment-pending-report/shipment-pending-report.component';
import { CostBreakdownReportComponent } from './cost-breakdown-report/cost-breakdown-report.component';
import { PriceQuotationStatementComponent } from './price-quotation-statement/price-quotation-statement.component';
import { ShipmentScheduleComponent } from './shipment-schedule/shipment-schedule.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmenScheduleForManagementComponent } from './shipmen-schedule-for-management/shipmen-schedule-for-management.component';

const routes: Routes = [
  {path: 'Shipment-Shedule', component:  ShipmentScheduleComponent},
  {path: 'Price-Quotation-Statement', component:  PriceQuotationStatementComponent},
  {path: 'Cost-Breakdown-Report', component:  CostBreakdownReportComponent},
  {path: 'Shipment-Pending-Report', component:  ShipmentPendingReportComponent},
  {path: 'Work-Progress-Report', component:  WorkProgressReportComponent},
  {path: 'Capacity-And-Order-Booking-Status', component:  CapacityAndOrderBookingStatusComponent},
  {path: 'Capacity-Allocation-Print', component:  CapacityAllocationPrintComponent},
  {path: 'Monthly-Capacity-And-Order-Qty', component:  MonthlyCapacityAndOrderQtyComponent},
  {path: 'Shipment-Schedule-for-Management', component: ShipmenScheduleForManagementComponent },
  {path: 'Daily-Ex-Factory-Report', component:  DailyExFectoryReportComponent},
  {path: 'Order-Status-Report', component:  OrderStatusReportComponent},
  {path: 'Weekly-Capacity-and-Order-Booking-Status', component:  WeeklyCapacityAndOrderBookingStatusComponent},
  {path: 'SMV-vs-Price-Analysis-Report', component:  SmvVsPriceAnalysisReportComponent},
  {path: 'Order-Wise-BudgetReport', component:  OrderWiseBudgetReportComponent},
  {path: 'Buyer-Inquery-Status-Report', component:  BuyerInqueryReportComponent},
  {path: 'Date-Wise-Shipment-Status', component:  DateWiseShipmentStatusComponent},
  {path: 'Process-Loss-Report', component:  ProcessLossReportComponent},
  {path: 'CPA-Short-Fabric-Booking-Analysis-Report', component:  CpaShortFabricBookingAnalysisReportComponent},
  {path: 'Order-Forecasting-Report', component:  OrderForcastingReportComponent},
  {path: 'Style-Closing-Report', component:  StyleClosingReportComponent},
  {path: 'Post-Costing-Report', component:  PostCostingReportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchandisingRptRoutingModule { }
