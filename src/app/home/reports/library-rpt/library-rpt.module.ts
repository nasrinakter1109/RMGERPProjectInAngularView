import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRptRoutingModule } from './library-rpt-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { OrderEntryListComponent } from './order-entry-list/order-entry-list.component';


@NgModule({
  declarations: [
    SupplierListComponent,
    ItemListComponent,
    OrderEntryListComponent
  ],
  imports: [
    CommonModule,
    LibraryRptRoutingModule

  ]
})
export class LibraryRptModule { }
