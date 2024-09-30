import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layout1/layout1.component';
import { LayoutBlankComponent } from './layout-blank/layout-blank.component';
import { RouterModule } from '@angular/router';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { LayoutSidenavComponent } from './layout-sidenav/layout-sidenav.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutService } from './layout.service';


@NgModule({
  declarations: [
    Layout1Component,
    LayoutBlankComponent,
    LayoutNavbarComponent,
    LayoutSidenavComponent,
    LayoutFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],providers: [
    LayoutService
  ]
})
export class LayoutModule { }
