import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomersService } from './../customers.service';

@Component({
  selector: 'pb-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomersService]
})
export class CustomerListComponent implements OnInit {
  customerList: Array<any>;
  loading: boolean;
  errorMsg: string;

  constructor(private customersService: CustomersService, private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.customersService.getAll()
      .finally(() => this.loading = false)
      .subscribe(
        customers => this.customerList = customers,
        error => this.errorMsg = error.status + ' ' + error.statusText)
  }

  routeToCustomerDetail(id: string) {
    this.router.navigate(['Customers', id]);
  }

}
