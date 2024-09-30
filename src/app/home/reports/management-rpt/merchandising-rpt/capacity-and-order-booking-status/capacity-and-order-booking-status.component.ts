import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacity-and-order-booking-status',
  templateUrl: './capacity-and-order-booking-status.component.html',
  styleUrls: ['./capacity-and-order-booking-status.component.css']
})
export class CapacityAndOrderBookingStatusComponent implements OnInit {
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
