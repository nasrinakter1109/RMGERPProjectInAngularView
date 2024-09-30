import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-forcasting-report',
  templateUrl: './order-forcasting-report.component.html',
  styleUrls: ['./order-forcasting-report.component.css']
})
export class OrderForcastingReportComponent implements OnInit {

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
