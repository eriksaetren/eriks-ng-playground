import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../customers';

@Pipe({
  name: 'customerTableExtractor',
})
export class CustomerTableExtractorPipe implements PipeTransform {
  public transform(cust: Customer, field: string, subfield: string): any {
    if (typeof cust[field] === 'object') {
      return cust[field][subfield];
    } else {
      return cust[field];
    }
  }
}
