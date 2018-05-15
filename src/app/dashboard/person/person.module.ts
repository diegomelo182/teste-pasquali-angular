import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { SharedModule } from '../../shared/shared.module';

const modules = [
  CommonModule,
  PersonRoutingModule,
  SharedModule
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: []
})
export class PersonModule { }
