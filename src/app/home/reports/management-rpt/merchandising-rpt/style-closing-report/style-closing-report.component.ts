import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-closing-report',
  templateUrl: './style-closing-report.component.html',
  styleUrls: ['./style-closing-report.component.css']
})
export class StyleClosingReportComponent implements OnInit {

  constructor() { }
  isShowBtnPress:boolean=false;
  isSearchPanelOpen:boolean=true;
  ngOnInit(): void {
  }
  onSearchPanel(){
    this.isSearchPanelOpen=!this.isSearchPanelOpen;
    this.isShowBtnPress=false;
  }
  onShow(){
    this.isShowBtnPress=!this.isShowBtnPress
  }
}
