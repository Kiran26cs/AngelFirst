import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {ProfileManagementComponent} from './profile-management.component';

const routes: Routes = [
    { path: '', component: ProfileManagementComponent },
    {path: 'profile', component:ProfileManagementComponent }
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
    