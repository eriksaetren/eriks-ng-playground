import { Component, OnInit } from '@angular/core';
import { CustomerServiceComponent } from './customer-service';
import { Customer } from './customers';

@Component({
  selector: 'table-test',
  templateUrl: './table-test-component.html',
  styleUrls: ['./table-test-component.css'],
})
export class TableTestComponent implements OnInit {
  templateTestString: string = '';
  customers: Customer[];

  constructor(private customerService: CustomerServiceComponent) {}

  customerCols = [
    {
      header: 'ID',
      field: 'id',
      subfield: '',
    },
    {
      header: 'Name',
      field: 'name',
      subfield: '',
    },
    {
      header: 'Country',
      field: 'country',
      subfield: 'name',
    },
    {
      header: 'Company',
      field: 'company',
      subfield: '',
    },
    {
      header: 'Date',
      field: 'date',
      subfield: '',
    },
    {
      header: 'Status',
      field: 'status',
      subfield: '',
    },
    {
      header: 'Activity',
      field: 'activity',
      subfield: '',
    },
    {
      header: 'Representative Name',
      field: 'representative',
      subfield: 'name',
    },
  ];

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next: (cust) => {
        this.customers = cust['data'];
      },
      error: (err) => {
        // Handle error here
      },
      complete: () => {
        console.log(this.customers);
      },
    });
  }
}
