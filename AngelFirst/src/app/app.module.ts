import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppRouterModule} from './app-router.module'
import {AppComponent} from './app.component'
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterSecurityService } from './security/router-security.service';
import { EmployeeComponent } from '../app/Employee/employee.component'
import { EmployeeService } from '../app/Services/Employee/employee.service'
import { HttpClientModule } from '@angular/common/http';
import { BasicTableStyleDirective } from './CustomDirective/table/basic-table-style.directive';
import { BasicTableComponent } from './CustomComponents/table/basic-table/basic-table.component';
import { CustomersComponent } from './CustomTableDisplay/Customer/customers/customers.component';
import { ManageCustomersComponent } from './Customer/manage-customers/manage-customers.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeNavigationComponent } from '../app/CustomComponents/home-navigation/home-navigation.component';
import { AppFooterComponent } from '../app/CustomComponents/app-footer/app-footer.component';
import { SidebarNavigatorComponent } from './sidebar-navigator/sidebar-navigator.component';

@NgModule({
  imports: [
      BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    ],
  declarations: [AppComponent, HomeComponent, AboutComponent, PageNotFoundComponent, EmployeeComponent, BasicTableStyleDirective, BasicTableComponent, CustomersComponent, ManageCustomersComponent, HomeNavigationComponent, AppFooterComponent, SidebarNavigatorComponent],
  providers: [RouterSecurityService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
