import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NgSelectComponent } from '@ng-select/ng-select';
import { ProfileInfoModel } from 'src/app/models/app.ProfileInfoModel';
import { AuthService } from 'src/app/services/auth.service';
import { LayoutSidenavComponent } from '../layout-sidenav/layout-sidenav.component';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css'],
  styles: [':host { display: block; }', ':host /deep/ .layout-loading .sidenav-link { transition: none !important; }']
})
export class Layout1Component implements OnInit,AfterViewInit {
  public initialized = false;
  sdiebarShow:boolean = false;
  dropDownMenuShow:boolean = false;
  personProfile = new ProfileInfoModel;
  menuId:any = 0;
  userName:string="Zaynax";
  orientation = 'vertical';
  // private _LayoutService;
  // private _ProfileService;
  // SideBarMenusList: Array<AssignRolesViewModel> = [];
  errorMessage: any;
  @ViewChild(LayoutSidenavComponent)
  layoutSidenavComponent!: LayoutSidenavComponent;
  constructor(@Inject(DOCUMENT) private _document: Document, private router:Router,
  // private LayoutService: LayoutService,
  // profileService:ProfileService
  ) {
    console.log(this.router.url)
    if(this.router.url=='/'){
      this.sdiebarShow = !this.sdiebarShow;
      this._document.body.classList.add('sidebar-collapse');
       this._document.body.classList.add('sidebar-open');
    }
    // this.sdiebarShow = !this.sdiebarShow;
    //   this._document.body.classList.add('sidebar-collapse');
    //   this._document.body.classList.add('sidebar-open');
    // this._LayoutService = LayoutService;
    // this._ProfileService = profileService;
  }
ngAfterViewInit(){
  this.layoutSidenavComponent.ngOnInit();
}
  sideberCollapse(){
    this.sdiebarShow = !this.sdiebarShow;
    if(this.sdiebarShow){
      this._document.body.classList.add('sidebar-collapse');
      this._document.body.classList.add('sidebar-open');
    }
    else{
      this._document.body.classList.remove('sidebar-collapse');
      this._document.body.classList.remove('sidebar-open');
    }

  }
  ngOnInit() {

    // this._ProfileService.GetProfileInfo().subscribe(
    //   profileInfo => {
    //     this.personProfile = profileInfo[0];
    //     this.personProfile.personImgUrl  = environment.apiEndpoint+this.personProfile.personImgUrl;
    //     debugger
    //   },
    //   error => this.errorMessage = <any>error
    // );

    // this._LayoutService.GetAllSideBar().subscribe(
    //   AllSideBar => {

    //     let parentMenu = AllSideBar.filter((menu)=>( menu.parentId == 0));
    //     parentMenu[0].active = true;
    //     parentMenu.forEach(element => {
    //       element.subMenu = AllSideBar.filter((smenu)=>( smenu.parentId == element.id));
    //       // console.log(element)
    //       this.SideBarMenusList.push(element);
    //     });
    //   },
    //   error => this.errorMessage = <any>error
    // );
  }
  onModuleClick(moduleId:number){
    AuthService.ModuleId = moduleId;
    this.ngAfterViewInit();
  }
  menuCollapse(index: number,className:string){
      // this.SideBarMenusList.filter(
      //   (menu, i) => i !== index && menu.active
      // ).forEach(menu => menu.active = !menu.active);
    //this.SideBarMenusList[index].active = !this.SideBarMenusList[index].active;
  }
  logout(){}
}
