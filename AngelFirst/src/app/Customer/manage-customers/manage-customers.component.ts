import { Component, OnInit } from '@angular/core';
import { CustomerDetail } from '../../Model/CustomerDetail';
import { Validator, FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {
  private customerDetail: CustomerDetail
  private customerFormBuilder: FormGroup
  submitted: boolean
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCustomerDetail()
    this.BuildCustomerForm()
  }

  getCustomerDetail() {
    this.customerDetail = new CustomerDetail()
    this.customerDetail.id = 1
    this.customerDetail.firstName = "Kiran"
    this.customerDetail.lastName = "Varghese"
    this.customerDetail.emailAddress = "LatestText@email.com"
  }

  BuildCustomerForm() {
    this.customerFormBuilder = this.formBuilder.group(
      {
        'firstName': [this.customerDetail.firstName, Validators.required],
        'lastName': [this.customerDetail.lastName, Validators.required],
        'emailAddress': [this.customerDetail.emailAddress, Validators.required]
      }
    )
  }

  onCustomerFormSubmit(formSubmitDetail: FormGroup) {
    this.submitted = true
    debugger;
    if (formSubmitDetail.invalid) { return false }

    this.customerDetail = new CustomerDetail()
    this.customerDetail.firstName = formSubmitDetail.controls['firstName'].value
    this.customerDetail.lastName = formSubmitDetail.controls['lastName'].value
    this.customerDetail.emailAddress = formSubmitDetail.controls['emailAddress'].value

    console.log(this.customerDetail)
  }
}
