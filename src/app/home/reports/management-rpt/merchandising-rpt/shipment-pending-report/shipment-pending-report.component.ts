import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipment-pending-report',
  templateUrl: './shipment-pending-report.component.html',
  styleUrls: ['./shipment-pending-report.component.css']
})
export class ShipmentPendingReportComponent implements OnInit {

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
