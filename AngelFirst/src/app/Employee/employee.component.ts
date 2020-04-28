import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/Employee/employee.service'
import { IEmployee } from '../Model/IEmployee';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees: Array<IEmployee>;
  public employeeDetail: IEmployee;
  public employeesExists: boolean;
  public employeeExists: boolean;
  public errorMessage: string;
  public id: number;
  constructor(private _employeeService: EmployeeService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this._route.snapshot.paramMap.get('id');
    this.errorMessage = '';
    this.employeesExists = false;
    this.employeeExists = false;
    if (this.id === 0) {
      this.getAllEmployees();
      this.employeesExists = (this.employees !== undefined || this.employees !== null) && this.errorMessage === '';
    } else {
      this.getEmployeeByID();
      this.employeeExists = (this.employeeDetail !== undefined || this.employeeDetail !== null) && this.errorMessage === '';
    }
  }

  

  getAllEmployees() {
    return this._employeeService.getAllEmployees()
      .subscribe(x => this.employees = x,
      error => this.errorMessage = error);
  }

  
  getEmployeeByID() {
    this.getAllEmployees();
    this.employeeDetail = this.employees.filter(x => x.id === this.id.toString())[0];
    this.employees = null;
  }
}
