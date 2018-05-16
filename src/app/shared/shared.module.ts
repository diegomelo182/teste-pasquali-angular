import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { PersonService } from '../dashboard/person/services/person.service.service';

const modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  TextMaskModule
];

const services = [
  DatePipe,
  PersonService
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  declarations: [],
  providers: [
    ...services
  ]
})
export class SharedModule { }
