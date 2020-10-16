import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileRouterModule} from './profile-router.module'
import {ProfileManagementComponent} from './profile-management.component'
import { ProfileDisplayComponent } from './usercontrol/profile-display/profile-display.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
      CommonModule, ProfileRouterModule, FormsModule 
    ],
  declarations: [ProfileManagementComponent, ProfileDisplayComponent]
})
export class ProfileModule { }
