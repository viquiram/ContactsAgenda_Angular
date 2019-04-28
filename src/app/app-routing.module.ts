import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {ContactAddComponent} from './contact-add/contact-add.component';

const routes: Routes = [
  { path: "", component: ContactAddComponent },
  { path: "contact/:id", component: ContactDetailComponent },
  {
    path: "",
    component: ContactListComponent,
    outlet: "list"
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
