import { Component, OnInit } from '@angular/core';
import { Table } from '../../../Model/Table/Table';
import { Row } from '../../../Model/Table/Row';
import { Element } from '../../../Model/Table/Element';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  datatable: Table = new Table()
  dataRows: Array<Row> = []
   
  constructor() { }

  ngOnInit() {
    this.CreateTable();
  }

  CreateRows() {
    let dataElement: Element
    let dataRow: Row = new Row()
    for (var i = 0; i < 10; i++) {
      dataElement = new Element(i.toString())
      dataRow.cells.push(dataElement)
    }
    this.dataRows.push(dataRow)
  }
  CreateTable() {
    for (var i = 0; i < 5; i++) {
      this.CreateRows()
    }
    this.datatable.TableRows = this.dataRows
  }
}
