import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-capacity-and-order-booking-status',
  templateUrl: './weekly-capacity-and-order-booking-status.component.html',
  styleUrls: ['./weekly-capacity-and-order-booking-status.component.css']
})
export class WeeklyCapacityAndOrderBookingStatusComponent implements OnInit {
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
