import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './screens/list/list.component';
import { CreateEditComponent } from './screens/create-edit/create-edit.component';
import { FormComponent } from './components/form/form.component';

const modules = [
  CommonModule,
  AccountRoutingModule,
  SharedModule
];

const components = [
  ListComponent,
  CreateEditComponent,
  FormComponent
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components
  ]
})
export class AccountModule { }
