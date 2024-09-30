import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipmen-schedule-for-management',
  templateUrl: './shipmen-schedule-for-management.component.html',
  styleUrls: ['./shipmen-schedule-for-management.component.css']
})
export class ShipmenScheduleForManagementComponent implements OnInit {

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
