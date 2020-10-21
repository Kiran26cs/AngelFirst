import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {ShopItemsComponent} from '../shop-items/shop-items.component';

const routes: Routes = [
    { path: '', redirectTo: 'shop' },
    {
        path: 'shop', component: ShopItemsComponent,
        children: [
            
        ]
    }
];


@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
      RouterModule
  ]
})
export class FoodRouterModule { }
