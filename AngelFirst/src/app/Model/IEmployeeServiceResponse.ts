import { IEmployee} from '../Model/IEmployee'

export interface IEmployeeServiceResponse {
  data: Array<IEmployee>
}


export interface IEmployeeSingleResponse {
  data: IEmployee
}
