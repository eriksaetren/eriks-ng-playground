import { Component } from '@angular/core';
import { Cars } from './cars';

@Component({
  selector: 'template-test',
  templateUrl: './template-test-component.html',
  styleUrls: ['./template-test-component.css'],
})
export class TemplateTestComponent {
  templateTestString: string = '';

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
  ];
}
