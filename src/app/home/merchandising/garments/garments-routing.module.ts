import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: 'Order-Tracking',  loadChildren: () => import('./order-tracking/order-tracking.module').then(m => m.OrderTrackingModule)},
{path: 'Fabric-Booking',  loadChildren: () => import('./fabric-booking/fabric-booking.module').then(m => m.FabricBookingModule)},
{path: 'Trims-Booking',  loadChildren: () => import('./trims-booking/trims-booking.module').then(m => m.TrimsBookingModule)},
{path: 'Service-Booking',  loadChildren: () => import('./service-booking/service-booking.module').then(m => m.ServiceBookingModule)},
{path: 'Sport-Costing',  loadChildren: () => import('./sport-costing/sport-costing.module').then(m => m.SportCostingModule)},
{path: 'Approval-Tracking',  loadChildren: () => import('./approval-tracking/approval-tracking.module').then(m => m.ApprovalTrackingModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarmentsRoutingModule { }
