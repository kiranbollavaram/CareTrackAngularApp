import { Component, OnInit } from '@angular/core';
import {MachineService} from '../machine.service';
import { Customer } from '../customer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  customer: Customer[];
  myForm: FormGroup;
  id: 'Cust1';
  customerId: string;
  constructor(private machineService: MachineService, private router: Router) { }

  message: 'CustomerId is Invalid!';
  ngOnInit() {
    this.myForm = new FormGroup({
      'CustomerId': new FormControl(null, [Validators.required])
   });
  }

  onSubmit(): string {
    this.customerId = this.myForm.get('CustomerId').value;

    this.machineService.getCustomer('Cust01')
    .subscribe((customerDetails) => this.customer = customerDetails);

    if (this.customer !== null) {
      this.router.navigate(['/select-option']);
    } else {
      return this.message;
    }
  }
}
