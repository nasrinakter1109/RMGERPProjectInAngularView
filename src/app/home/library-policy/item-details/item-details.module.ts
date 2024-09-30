import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDetailsRoutingModule } from './item-details-routing.module';
import { YarnCountComponent } from './yarn-count/yarn-count.component';
import { ItemGroupComponent } from './item-group/item-group.component';
import { ItemAccountGroupComponent } from './item-account-group/item-account-group.component';


@NgModule({
  declarations: [
    YarnCountComponent,
    ItemGroupComponent,
    ItemAccountGroupComponent
  ],
  imports: [
    CommonModule,
    ItemDetailsRoutingModule
  ]
})
export class ItemDetailsModule { }
