import { ProfitCenterComponent } from './profit-center/profit-center.component';
import { SectionProfileComponent } from './section-profile/section-profile.component';
import { DepartmentProfileComponent } from './department-profile/department-profile.component';
import { DivisionProfileComponent } from './division-profile/division-profile.component';
import { LocationProfileComponent } from './location-profile/location-profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { GroupProfileComponent } from './group-profile/group-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Group-Profile', component:  GroupProfileComponent},
  {path: 'Company-Profile', component:  CompanyProfileComponent},
  {path: 'Location-Profile', component:  LocationProfileComponent},
  {path: 'Division-Profile', component:  DivisionProfileComponent},
  {path: 'Department-Profile', component:  DepartmentProfileComponent},
  {path: 'Section-Profile', component:  SectionProfileComponent},
  {path: 'Profit-Center', component:  ProfitCenterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostCenterRoutingModule { }
