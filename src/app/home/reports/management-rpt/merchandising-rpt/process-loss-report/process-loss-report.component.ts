import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-loss-report',
  templateUrl: './process-loss-report.component.html',
  styleUrls: ['./process-loss-report.component.css']
})
export class ProcessLossReportComponent implements OnInit {

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
