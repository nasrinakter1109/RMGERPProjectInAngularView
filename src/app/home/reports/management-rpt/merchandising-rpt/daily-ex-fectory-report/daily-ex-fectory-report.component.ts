import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-ex-fectory-report',
  templateUrl: './daily-ex-fectory-report.component.html',
  styleUrls: ['./daily-ex-fectory-report.component.css']
})
export class DailyExFectoryReportComponent implements OnInit {

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
