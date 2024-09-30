import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-entry-list',
  templateUrl: './order-entry-list.component.html',
  styleUrls: ['./order-entry-list.component.css']
})
export class OrderEntryListComponent implements OnInit {

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
