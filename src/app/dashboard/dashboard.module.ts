import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

const modules = [
  CommonModule,
  DashboardRoutingModule,
  SharedModule
];

const components = [
  DashboardComponent,
  HomeComponent
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components
  ]
})
export class DashboardModule { }
