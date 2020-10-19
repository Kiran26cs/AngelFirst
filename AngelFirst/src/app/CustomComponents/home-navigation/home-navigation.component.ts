import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-navigation',
  templateUrl: './home-navigation.component.html',
  styleUrls: ['./home-navigation.component.css']
})
export class HomeNavigationComponent implements OnInit {
    private displayVal: string;
    @Output() emitclickedoption = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  displaychangevalue(val) {
      debugger;
      console.log(val);
  }
  clickhandler(val) {
      this.displayVal = val;
      this.emitclickedoption.emit(this.displayVal);
  }
}
