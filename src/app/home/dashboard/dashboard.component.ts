import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // typeWiseUse: TypeWiseUser[];
  typeWiseUse=[{numberOfUser:1000,userTypeId:1,userTypeName:'Admin'}];
  errorMessage: any;
  totalAgent:any;
  totalDso:any;
  totalDistributor:any=800;
  totalCustomer:any;
  // private _adminDashboardService;

  constructor(
    // private adminDashboardService: AdminDashboardService
    ) {
      // this._adminDashboardService = adminDashboardService;
  }
  ngOnInit() {
      // this._adminDashboardService.GetNumberOfUser().subscribe(
      //     userTypeWiseNumber => {
      //         debugger;
      //       this.typeWiseUse = userTypeWiseNumber;
      //       if(this.typeWiseUse!=undefined){
      //         this.typeWiseUse.forEach(element => {
      //             if(element.userTypeName=="Distributor"){
      //                 this.totalDistributor =element.numberOfUser;
      //             }
      //             if(element.userTypeName=="Customer"){
      //                 this.totalCustomer =element.numberOfUser;
      //             }
      //             if(element.userTypeName=="Agent"){
      //                 this.totalAgent =element.numberOfUser;
      //             }
      //             if(element.userTypeName=="Dso"){
      //                 this.totalDso =element.numberOfUser;
      //             }
      //         });
      //     }
      //     },
      //     error => this.errorMessage = <any>error);
      //     debugger;

  }

}
