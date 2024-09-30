import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-quotation-statement',
  templateUrl: './price-quotation-statement.component.html',
  styleUrls: ['./price-quotation-statement.component.css']
})
export class PriceQuotationStatementComponent implements OnInit {

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
