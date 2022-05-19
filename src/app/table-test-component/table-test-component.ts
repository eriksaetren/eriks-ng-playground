import { Component, OnInit } from '@angular/core';
import { Cars } from './cars';
import { CustomerServiceComponent } from './customer-service';

@Component({
  selector: 'table-test',
  templateUrl: './table-test-component.html',
  styleUrls: ['./table-test-component.css'],
})
export class TableTestComponent implements OnInit {
  templateTestString: string = '';

  constructor(private customerService: CustomerServiceComponent) {}

  frozenCols = [
    {
      header: 'Vin',
      field: 'vin',
    },
    {
      header: 'Year',
      field: 'year',
    },
  ];

  carCols = [
    {
      header: 'Vin',
      field: 'vin',
    },
    {
      header: 'Year',
      field: 'year',
    },
    {
      header: 'Brand',
      field: 'brand',
    },
    {
      header: 'Color',
      field: 'color',
    },
  ];

  carData: Cars[] = [
    {
      vin: '123somevin',
      year: 2004,
      brand: 'Ford',
      color: 'Blue',
    },
    {
      vin: '456anothervin',
      year: 2018,
      brand: 'Buick',
      color: 'Green',
    },
    {
      vin: 'acar1hasav2innumber3',
      year: 2012,
      brand: 'Chevy',
      color: 'Red',
    },
    {
      vin: '123somevin',
      year: 2004,
      brand: 'Ford',
      color: 'Blue',
    },
    {
      vin: '456anothervin',
      year: 2018,
      brand: 'Buick',
      color: 'Green',
    },
    {
      vin: 'acar1hasav2innumber3',
      year: 2012,
      brand: 'Chevy',
      color: 'Red',
    },
    {
      vin: '123somevin',
      year: 2004,
      brand: 'Ford',
      color: 'Blue',
    },
    {
      vin: '456anothervin',
      year: 2018,
      brand: 'Buick',
      color: 'Green',
    },
    {
      vin: 'acar1hasav2innumber3',
      year: 2012,
      brand: 'Chevy',
      color: 'Red',
    },
    {
      vin: '123somevin',
      year: 2004,
      brand: 'Ford',
      color: 'Blue',
    },
    {
      vin: '456anothervin',
      year: 2018,
      brand: 'Buick',
      color: 'Green',
    },
    {
      vin: 'acar1hasav2innumber3',
      year: 2012,
      brand: 'Chevy',
      color: 'Red',
    },
    {
      vin: '123somevin',
      year: 2004,
      brand: 'Ford',
      color: 'Blue',
    },
    {
      vin: '456anothervin',
      year: 2018,
      brand: 'Buick',
      color: 'Green',
    },
    {
      vin: 'acar1hasav2innumber3',
      year: 2012,
      brand: 'Chevy',
      color: 'Red',
    },
    {
      vin: '123somevin',
      year: 2004,
      brand: 'Ford',
      color: 'Blue',
    },
    {
      vin: '456anothervin',
      year: 2018,
      brand: 'Buick',
      color: 'Green',
    },
    {
      vin: 'acar1hasav2innumber3',
      year: 2012,
      brand: 'Chevy',
      color: 'Red',
    },
  ];

  ngOnInit() {}
}
