import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { Table } from '../../../Model/Table/Table';
import { BasicTableStyleDirective } from '../../../CustomDirective/table/basic-table-style.directive'

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {
  dataExists: boolean
  @Input('dataSourceObj') dataSourceObj: Table
  @Input('TableName') TableName: string
  constructor() { }

  ngOnInit() {
    this.dataExists = this.dataSourceObj != null && this.dataSourceObj.TableRows.length > 0
  }

}
