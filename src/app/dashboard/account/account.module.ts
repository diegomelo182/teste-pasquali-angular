import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../../shared/shared.module';

const modules = [
  CommonModule,
  AccountRoutingModule,
  SharedModule
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: []
})
export class AccountModule { }
