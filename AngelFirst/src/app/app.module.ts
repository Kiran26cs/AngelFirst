import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppRouterModule} from './app-router.module'
import {AppComponent} from './app.component'
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  imports: [
      BrowserModule,
      AppRouterModule
    ],
  declarations: [AppComponent, HomeComponent, AboutComponent],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
