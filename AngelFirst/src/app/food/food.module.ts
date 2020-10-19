import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItemComponent } from './food-item/food-item.component';
import { ShopItemsComponent } from './shop-items/shop-items.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FoodItemComponent, ShopItemsComponent]
})
export class FoodModule { }
