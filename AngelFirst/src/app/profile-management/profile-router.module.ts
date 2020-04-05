import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {ProfileManagementComponent} from './profile-management.component';

const routes: Routes = [
  { path: '', redirectTo:'profile' },
  {
    path: 'profile', component: ProfileManagementComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'edit' },
      { path: 'edit', component: ProfileManagementComponent },
      { path: 'edit\:id', component: ProfileManagementComponent }
    ]
  }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
  exports: [
      RouterModule
  ]
})
export class ProfileRouterModule { }
