

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ThemeSettingsService } from './services/theme-settings.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private titleService: Title,
      private themeSettingsService: ThemeSettingsService,
      private router: Router) { }

  // Set page title
  set pageTitle(value: string) {
    this.titleService.setTitle(`${value} - Appwork`);
  }
   // Layout navbar color
  //  get layoutNavbarBg() {
  //   return this.themeSettingsService.getOption('navbarBg') || 'navbar-theme';
  // }
  redirect(url: string) {
    this.router.navigate([url]);
  }
}
