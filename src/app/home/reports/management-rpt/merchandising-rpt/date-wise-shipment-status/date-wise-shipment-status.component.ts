import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-wise-shipment-status',
  templateUrl: './date-wise-shipment-status.component.html',
  styleUrls: ['./date-wise-shipment-status.component.css']
})
export class DateWiseShipmentStatusComponent implements OnInit {

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
