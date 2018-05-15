import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  TextMaskModule
];

const services = [];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...services
  ],
  declarations: []
})
export class SharedModule { }
