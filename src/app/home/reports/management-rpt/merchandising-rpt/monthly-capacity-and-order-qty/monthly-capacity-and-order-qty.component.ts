import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-capacity-and-order-qty',
  templateUrl: './monthly-capacity-and-order-qty.component.html',
  styleUrls: ['./monthly-capacity-and-order-qty.component.css']
})
export class MonthlyCapacityAndOrderQtyComponent implements OnInit {
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
