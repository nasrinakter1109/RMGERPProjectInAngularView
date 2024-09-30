import { OtherPartyProfileComponent } from './other-party-profile/other-party-profile.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Buyer-Profile', component:  BuyerProfileComponent},
  {path: 'Supplier-Profile', component:  SupplierProfileComponent},
  {path: 'Other-Party-Profile', component:  OtherPartyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactDetailsRoutingModule { }
