import { Component, OnInit } from '@angular/core';
import { Table } from '../../../Model/Table/Table';
import { Row } from '../../../Model/Table/Row';
import { Element } from '../../../Model/Table/Element';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  idValue: string = ""
  datatable: Table = new Table()
  dataRows: Array<Row> = []
  customerTableName: string = "List of Customers"

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.idValue = this._route.snapshot.paramMap.get('id')
    if (this.idValue == null) {
      this.CreateTable();
    } else {
      this.datatable = null;
    }
    
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
