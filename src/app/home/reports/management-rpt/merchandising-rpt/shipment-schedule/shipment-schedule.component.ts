import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipment-schedule',
  templateUrl: './shipment-schedule.component.html',
  styleUrls: ['./shipment-schedule.component.css']
})
export class ShipmentScheduleComponent implements OnInit {

  constructor() { }
  isSearchPanelActive:boolean=true
  showbtnIsClick:boolean=false;
  shortbtnIsClick:boolean=false;
  ngOnInit(): void {
  }
  onSearchPanelClick(){
    this.isSearchPanelActive=!this.isSearchPanelActive;
    this.showbtnIsClick=false;
    this.shortbtnIsClick=false;
  }
  onShortBtnClick(){
    this.shortbtnIsClick=!this.shortbtnIsClick
    this.showbtnIsClick=false;
  }
  onShowBtnClick(){
    this.shortbtnIsClick=false;
    this.showbtnIsClick=!this.showbtnIsClick;
  }
}
