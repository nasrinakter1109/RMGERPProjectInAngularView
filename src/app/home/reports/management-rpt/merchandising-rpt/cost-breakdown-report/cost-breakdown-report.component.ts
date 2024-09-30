import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-breakdown-report',
  templateUrl: './cost-breakdown-report.component.html',
  styleUrls: ['./cost-breakdown-report.component.css']
})
export class CostBreakdownReportComponent implements OnInit {
  isShowBtnPress:boolean=false;
  isSearchPanelOpen:boolean=true;
  constructor() { }

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
