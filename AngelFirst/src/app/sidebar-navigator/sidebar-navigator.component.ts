import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-navigator',
  templateUrl: './sidebar-navigator.component.html',
  styleUrls: ['./sidebar-navigator.component.css']
})
export class SidebarNavigatorComponent implements OnInit {

    @Input() inpval: string;
    //@Output() changevalue = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
