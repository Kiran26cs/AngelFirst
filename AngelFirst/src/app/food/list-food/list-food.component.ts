import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {food} from '../../Model/food/food';

@Component({
    selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {
    private listOfFood: Array<food>
    private listOfSearchedFood: Array<food>
    private listdontexists: boolean

    @Input() searchvalue: string;
    private cd: ChangeDetectorRef;
    constructor(cd: ChangeDetectorRef) {
        this.cd = cd;
    }

  ngOnInit() {
      this.displayDetails();
  }
  ngDoCheck() {
      this.displayDetails();
  }
  displayDetails() {
      if (this.searchvalue === undefined || this.searchvalue === null) {
          this.getListBySearchAll();
          this.listOfSearchedFood = this.listOfFood;
      } else {
          this.getListBySearchText();
      }
      debugger;
      if (this.listOfSearchedFood === null || this.listOfSearchedFood === undefined || this.listOfSearchedFood.length == 0) {
          this.listdontexists = true;
      } else {
          this.listdontexists = false;
      }
  }

  getListBySearchAll() {
      this.listOfFood = [{ id: 1, name: 'Milk', description: 'This is a milk', unitCost: 25 },
          { id: 2, name: 'Beef', description: 'This is a beef', unitCost: 725 },
          { id: 3, name: 'Mutton', description: 'This is a mutton', unitCost: 2500 },
          { id: 4, name: 'Fish', description: 'This is a Fish', unitCost: 250 },
          { id: 2, name: 'Beef', description: 'This is a beef', unitCost: 725 },
          { id: 3, name: 'Mutton', description: 'This is a mutton', unitCost: 2500 },
          { id: 4, name: 'Fish', description: 'This is a Fish', unitCost: 250 },
          { id: 2, name: 'Beef', description: 'This is a beef', unitCost: 725 },
          { id: 3, name: 'Mutton', description: 'This is a mutton', unitCost: 2500 },
          { id: 4, name: 'Fish', description: 'This is a Fish', unitCost: 250 },
          { id: 2, name: 'Beef', description: 'This is a beef', unitCost: 725 },
          { id: 3, name: 'Mutton', description: 'This is a mutton', unitCost: 2500 },
          { id: 4, name: 'Fish', description: 'This is a Fish', unitCost: 250 }
      ]
  }

  getListBySearchText() {
      this.getListBySearchAll();
      this.listOfSearchedFood = this.listOfFood.filter((f) => f.name.search(new RegExp(this.searchvalue,'i')) > -1)

  }

}
