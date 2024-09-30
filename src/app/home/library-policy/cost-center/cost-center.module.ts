import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostCenterRoutingModule } from './cost-center-routing.module';
import { GroupProfileComponent } from './group-profile/group-profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { LocationProfileComponent } from './location-profile/location-profile.component';
import { DivisionProfileComponent } from './division-profile/division-profile.component';
import { DepartmentProfileComponent } from './department-profile/department-profile.component';
import { SectionProfileComponent } from './section-profile/section-profile.component';
import { ProfitCenterComponent } from './profit-center/profit-center.component';



@NgModule({
  declarations: [
    GroupProfileComponent,
    CompanyProfileComponent,
    LocationProfileComponent,
    DivisionProfileComponent,
    DepartmentProfileComponent,
    SectionProfileComponent,
    ProfitCenterComponent
  ],
  imports: [
    CommonModule,
    CostCenterRoutingModule
  ]
})
export class CostCenterModule { }
