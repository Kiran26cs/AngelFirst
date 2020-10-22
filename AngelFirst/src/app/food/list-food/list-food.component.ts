import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {food} from '../../Model/food/food';
import {  Validator, FormArray, FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {
    private listOfFood: Array<food>
    private listOfSearchedFood: Array<food>
    private listdontexists: boolean
    private foodFormGroup: FormGroup
    private newFoodForm: food
    private submitted: boolean = false;

    @Input() searchvalue: string;
    private cd: ChangeDetectorRef;
    constructor(cd: ChangeDetectorRef, public foodFormBuilder: FormBuilder) {
        this.cd = cd;
    }

  ngOnInit() {
      this.displayDetails();
      this.createFoodForm();
  }
  ngDoCheck() {
      if (!this.submitted) {
          this.displayDetails();
      }
  }
  displayDetails() {
      if (this.searchvalue === undefined || this.searchvalue === null) {
          this.getListBySearchAll();
          this.listOfSearchedFood = this.listOfFood;
      } else {
          this.getListBySearchText();
      }
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

  trackbyIndex(index: number): number {
      return index;
  }

  createFoodForm() {
      this.newFoodForm = new food();
      this.newFoodForm.name = '';
      this.newFoodForm.description = '';
      this.newFoodForm.unitCost = 0;

      this.foodFormGroup = this.foodFormBuilder.group(
          {
              'name': [this.newFoodForm.name, Validators.required],
              'description': [this.newFoodForm.description, Validators.required],
              'unitCost': [this.newFoodForm.unitCost, Validators.required],
          }
      );
  }


  addfoodItem(foodGrp: FormGroup) {
      this.submitted = true;
      this.newFoodForm.name = foodGrp.controls['name'].value;
      this.newFoodForm.description = foodGrp.controls['description'].value;
      this.newFoodForm.unitCost = foodGrp.controls['unitCost'].value;

      //this.getListBySearchAll();
      this.newFoodForm.id = this.listOfFood.length;
      this.listOfFood.push(this.newFoodForm);
  }
}
