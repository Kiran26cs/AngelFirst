import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from '../../Model/IEmployee';
import { IEmployeeServiceResponse } from '../../Model/IEmployeeServiceResponse';
import { IEmployeeSingleResponse } from '../../Model/IEmployeeServiceResponse';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class EmployeeService {
  
  employeesAPIUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  employeeAPIUrl = 'http://dummy.restapiexample.com/api/v1/employee';
  constructor(private _http: HttpClient) { }

  getAllEmployees(): Observable<IEmployee[]> {
    return this._http.get<IEmployeeServiceResponse>(this.employeesAPIUrl)
      .map(x => x.data)
      .catch(this.handleCatchErrors);
  }

  
  handleCatchErrors(error: HttpErrorResponse) {
    return Observable.throw(error.message);
  }
}
