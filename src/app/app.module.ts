import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login/login.service';
import { InterceptorService } from './shared/interceptors/interceptor.service';
import { RouterGuardService } from './router-guard.service';

const modules = [
  BrowserModule,
  HttpClientModule,
  ReactiveFormsModule,
  AppRoutingModule
];

const components = [
  AppComponent,
  LoginComponent
];

const services = [
  LoginService,
  RouterGuardService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  providers: [
    ...services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
