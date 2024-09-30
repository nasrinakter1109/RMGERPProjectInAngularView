import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-inquery-report',
  templateUrl: './buyer-inquery-report.component.html',
  styleUrls: ['./buyer-inquery-report.component.css']
})
export class BuyerInqueryReportComponent implements OnInit {
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
