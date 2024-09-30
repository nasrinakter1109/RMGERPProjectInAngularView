import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-progress-report',
  templateUrl: './work-progress-report.component.html',
  styleUrls: ['./work-progress-report.component.css']
})
export class WorkProgressReportComponent implements OnInit {
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
