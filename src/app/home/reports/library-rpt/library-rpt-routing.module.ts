import { OrderEntryListComponent } from './order-entry-list/order-entry-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Supplier-List', component:  SupplierListComponent},
  {path: 'Item-List', component:  ItemListComponent},
  {path: 'Order-Entry-List', component:  OrderEntryListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRptRoutingModule { }
