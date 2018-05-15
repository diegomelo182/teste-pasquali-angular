import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './screens/list/list.component';
import { CreateEditComponent } from './screens/create-edit/create-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create',
    component: CreateEditComponent
  },
  {
    path: 'edit/:id',
    component: CreateEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
