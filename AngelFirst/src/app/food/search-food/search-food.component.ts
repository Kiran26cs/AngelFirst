import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit {
    @Output() changevalue = new EventEmitter();
    private textVal: string;
  constructor() { }

  ngOnInit() {
  }

  changenotifier() {
      this.changevalue.emit(this.textVal);
  }

}
