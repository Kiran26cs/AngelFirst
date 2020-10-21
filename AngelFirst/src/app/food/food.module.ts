import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItemComponent } from './food-item/food-item.component';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { SearchFoodComponent } from './search-food/search-food.component';
import { FoodRouterModule } from './food-router/food-router.module';
import { ListFoodComponent } from './list-food/list-food.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule ,
    CommonModule,
    FoodRouterModule
  ],
  declarations: [FoodItemComponent, ShopItemsComponent, SearchFoodComponent, ListFoodComponent]
})
export class FoodModule { }
