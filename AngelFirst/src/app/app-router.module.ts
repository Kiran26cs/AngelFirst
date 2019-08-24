import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'profile', loadChildren:'./profile-management/profile.module#ProfileModule' }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes, {enableTracing:true})
    ],
  exports: [
      RouterModule
  ]
})
export class AppRouterModule { }
