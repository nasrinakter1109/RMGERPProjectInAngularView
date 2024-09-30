import { LayoutModule } from './layout/layout.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AuthService } from './services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    NgSelectModule,
    BrowserAnimationsModule,
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory
    // }),
  ],
  providers: [ AppService,
    AuthService,
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    //{ provide: ErrorHandler, useClass: AppErrorHandler },
    // { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
    {provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
