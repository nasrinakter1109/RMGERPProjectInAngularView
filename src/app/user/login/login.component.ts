import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { UserCredential } from 'src/app/models/user-credential';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['../../../assets/pages/authentication.scss'],
  styles: [`
  .authentication-inner{
    box-shadow: 0px 0px 5px 0px;
  }
  .loginBtn{
border-radius: 0px 50px 50px 0px;
}
  `
]
})
export class LoginComponent  {

  submitted = false;
  isLoading = false;
  credentials:UserCredential=new UserCredential();
  isUnAuthorize = false;

  constructor(
    private appService: AppService,
     private authService: AuthService,
      private toastr: ToastrService,
      private _Route:Router
      ) {
    this.appService.pageTitle = 'Login';
  }
  ngOnInit() {
    this.credentials = {
      loginId: '',
      loginPassword: '',
      rememberMe: false
    };
  }
  loginFormInvalid() {
    if (this.credentials.loginId.length === 0) {
      return true;
    }
    if (this.credentials.loginPassword.length === 0) {
      return true;
    }
    return false;
  }

  login() {
    console.log(this.credentials);
    this.submitted = true;
    if (this.loginFormInvalid()) {
      return;
    }
    this.isLoading = true;
     this._Route.navigate(['/dashboard']);
    // this._Route.navigate(['/Reports/Management-Rpt/Merchandising-Rpt/Shipment-Shedule']);
    // this.authService.login(this.credentials).subscribe((data: any) => {
    //   if (data.token) {
    //     localStorage.setItem('isRemembered', this.credentials.rememberMe ? 'true' : 'false');
    //     localStorage.setItem('token', data.token);
    //     localStorage.setItem('picture', data.user.picture);
    //     localStorage.setItem('userName', data.user.userName);
    //     localStorage.setItem('assignedPages',JSON.stringify(data.user.assignedPages));
    //     localStorage.setItem('loginID', data.user.loginID);
    //     let user = data.user as UserModel;
    //     if (this.credentials.rememberMe) {
    //       localStorage.setItem('loginID', user.loginID);
    //       localStorage.setItem('userName', user.userName);
    //       localStorage.setItem('userID', user.id.toString());
    //       localStorage.setItem('userTypeID', user.userTypeID.toString());
    //       localStorage.setItem('empCode', user.empCode);
    //       localStorage.setItem('picture', user.picture);
    //       localStorage.setItem('gradeValue', user.gradeValue.toString());
    //       localStorage.setItem('companyID', user.companyID.toString());
    //       localStorage.setItem('locked', 'false');
    //     } else {
    //       sessionStorage.setItem('loginID', user.loginID);
    //       sessionStorage.setItem('userName', user.userName);
    //       sessionStorage.setItem('userID', user.id.toString());
    //       sessionStorage.setItem('userTypeID', user.userTypeID.toString());
    //       sessionStorage.setItem('empCode', user.empCode);
    //       sessionStorage.setItem('picture', user.picture);
    //       sessionStorage.setItem('gradeValue', user.gradeValue.toString());
    //       sessionStorage.setItem('companyID', user.companyID.toString());
    //       sessionStorage.setItem('locked', 'false');
    //     }
    //     this.isLoading = false;

    //   }this.appService.redirect('/');
    // }, () => {
    //   this.isLoading = false;
    //   this.isUnAuthorize = true;
    // });
  }

  clearErrMsg() {
    this.isUnAuthorize = false;
  }
  reset(){}
}
