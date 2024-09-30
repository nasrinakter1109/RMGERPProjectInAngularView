import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { StoreLocationComponent } from './store-location/store-location.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmailAddressSetupComponent } from './email-address-setup/email-address-setup.component';
import { MailRecipientGroupComponent } from './mail-recipient-group/mail-recipient-group.component';
import { OrderPositionComponent } from './order-position/order-position.component';


@NgModule({
  declarations: [
    BankInfoComponent,
    StoreLocationComponent,
    EmployeeInfoComponent,
    EmailAddressSetupComponent,
    MailRecipientGroupComponent,
    OrderPositionComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
