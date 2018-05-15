import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule
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
