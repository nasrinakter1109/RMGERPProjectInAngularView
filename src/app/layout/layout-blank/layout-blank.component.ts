import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-layout-blank',
  templateUrl: './layout-blank.component.html',
  styles: [':host { display: block; }']
})
export class LayoutBlankComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hide-theme-settings');
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'hide-theme-settings');
  }

}
