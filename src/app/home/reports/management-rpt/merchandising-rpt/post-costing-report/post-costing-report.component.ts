import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-costing-report',
  templateUrl: './post-costing-report.component.html',
  styleUrls: ['./post-costing-report.component.css']
})
export class PostCostingReportComponent implements OnInit {

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
