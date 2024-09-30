import { AppService } from 'src/app/app.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject} from '@angular/core';
import { ProfileInfoModel } from 'src/app/models/app.ProfileInfoModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styleUrls: ['./layout-navbar.component.css']
})
export class LayoutNavbarComponent   {
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
  constructor(@Inject(DOCUMENT) private _document: Document,
  // private LayoutService: LayoutService,
  // profileService:ProfileService
  ) {
    this.sdiebarShow = !this.sdiebarShow;
      this._document.body.classList.add('sidebar-collapse');
      this._document.body.classList.add('sidebar-open');
    // this._LayoutService = LayoutService;
    // this._ProfileService = profileService;
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
  }
  menuCollapse(index: number,className:string){
      // this.SideBarMenusList.filter(
      //   (menu, i) => i !== index && menu.active
      // ).forEach(menu => menu.active = !menu.active);
    //this.SideBarMenusList[index].active = !this.SideBarMenusList[index].active;
  }
  logout(){}
}
