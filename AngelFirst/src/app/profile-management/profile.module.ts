import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileRouterModule} from './profile-router.module'
import {ProfileManagementComponent} from './profile-management.component'
@NgModule({
  imports: [
     CommonModule, ProfileRouterModule
    ],
  declarations: [ProfileManagementComponent]
})
export class ProfileModule { }
