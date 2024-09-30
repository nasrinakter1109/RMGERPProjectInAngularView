import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-wise-budget-report',
  templateUrl: './order-wise-budget-report.component.html',
  styleUrls: ['./order-wise-budget-report.component.css']
})
export class OrderWiseBudgetReportComponent implements OnInit {

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
