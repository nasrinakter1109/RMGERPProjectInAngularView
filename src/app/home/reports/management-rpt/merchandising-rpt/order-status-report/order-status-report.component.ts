import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-status-report',
  templateUrl: './order-status-report.component.html',
  styleUrls: ['./order-status-report.component.css']
})
export class OrderStatusReportComponent implements OnInit {
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
