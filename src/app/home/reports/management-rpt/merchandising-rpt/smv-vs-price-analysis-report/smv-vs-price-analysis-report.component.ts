import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smv-vs-price-analysis-report',
  templateUrl: './smv-vs-price-analysis-report.component.html',
  styleUrls: ['./smv-vs-price-analysis-report.component.css']
})
export class SmvVsPriceAnalysisReportComponent implements OnInit {
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
    this.isShowBtnPress=! this.isShowBtnPress;
  }
}
