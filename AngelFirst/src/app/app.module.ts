import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppRouterModule} from './app-router.module'
import {AppComponent} from './app.component'
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterSecurityService} from './security/router-security.service'

@NgModule({
  imports: [
      BrowserModule,
      AppRouterModule
    ],
  declarations: [AppComponent, HomeComponent, AboutComponent, PageNotFoundComponent],
  providers: [RouterSecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
