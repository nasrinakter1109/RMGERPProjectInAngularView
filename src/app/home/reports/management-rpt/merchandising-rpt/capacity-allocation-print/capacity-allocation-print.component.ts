import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacity-allocation-print',
  templateUrl: './capacity-allocation-print.component.html',
  styleUrls: ['./capacity-allocation-print.component.css']
})
export class CapacityAllocationPrintComponent implements OnInit {

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
