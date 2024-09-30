import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailsRoutingModule } from './contact-details-routing.module';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
import { OtherPartyProfileComponent } from './other-party-profile/other-party-profile.component';


@NgModule({
  declarations: [
    BuyerProfileComponent,
    SupplierProfileComponent,
    OtherPartyProfileComponent
  ],
  imports: [
    CommonModule,
    ContactDetailsRoutingModule
  ]
})
export class ContactDetailsModule { }
