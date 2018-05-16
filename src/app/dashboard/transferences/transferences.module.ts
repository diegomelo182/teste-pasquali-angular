import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferencesRoutingModule } from './transferences-routing.module';
import { ListComponent } from './screens/list/list.component';
import { CreateEditComponent } from './screens/create-edit/create-edit.component';
import { FormComponent } from './components/form/form.component';

const modules = [
  CommonModule,
  TransferencesRoutingModule
];

const components = [
  ListComponent,
  CreateEditComponent,
  FormComponent
];

const services = [];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components
  ],
  providers: [
    ...services
  ]
})
export class TransferencesModule { }
