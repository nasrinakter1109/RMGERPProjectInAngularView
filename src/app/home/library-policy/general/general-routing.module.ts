import { OrderPositionComponent } from './order-position/order-position.component';
import { MailRecipientGroupComponent } from './mail-recipient-group/mail-recipient-group.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { StoreLocationComponent } from './store-location/store-location.component';
import { EmailAddressSetupComponent } from './email-address-setup/email-address-setup.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Bank-Info', component:  BankInfoComponent},
  {path: 'Email-Address-Setup', component:  EmailAddressSetupComponent},
  {path: 'Store-Location', component:  StoreLocationComponent},
  {path: 'Employee-Info', component:  EmployeeInfoComponent},
  {path: 'Mail-Recipient-Group', component:  MailRecipientGroupComponent},
  {path: 'Order-Position', component:  OrderPositionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
