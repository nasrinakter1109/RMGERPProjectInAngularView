import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpa-short-fabric-booking-analysis-report',
  templateUrl: './cpa-short-fabric-booking-analysis-report.component.html',
  styleUrls: ['./cpa-short-fabric-booking-analysis-report.component.css']
})
export class CpaShortFabricBookingAnalysisReportComponent implements OnInit {

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
