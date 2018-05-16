import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  TextMaskModule
];

const services = [
  DatePipe
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...services
  ],
  declarations: [],
  providers: [
    ...services
  ]
})
export class SharedModule { }
