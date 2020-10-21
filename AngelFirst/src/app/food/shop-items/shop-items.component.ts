import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.css']
})
export class ShopItemsComponent implements OnInit {
    private searchValue: string;
    constructor() {
        
    }

  ngOnInit() {
  }

  fetchsearchvalue($event) {
      this.searchValue = $event;
  }
}
