import { Component, OnInit, Input } from '@angular/core';
import {food} from '../../Model/food/food';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
    @Input() fooditem: food
  constructor() { }

  ngOnInit() {
  }

}
