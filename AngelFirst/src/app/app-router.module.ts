import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterSecurityService} from './security/router-security.service'
import { EmployeeComponent } from './Employee/employee.component';
import { CustomersComponent } from './CustomTableDisplay/Customer/customers/customers.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'home', component: HomeComponent, canActivate: [RouterSecurityService]  },
    { path: 'home/:id', component: HomeComponent, canActivate: [RouterSecurityService] },
    { path: 'about', component: AboutComponent },
    { path: 'employees', component: EmployeeComponent },
    { path: 'employees/:id', component: EmployeeComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'profile', loadChildren: './profile-management/profile.module#ProfileModule' },
    { path: '**', component: PageNotFoundComponent }
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
