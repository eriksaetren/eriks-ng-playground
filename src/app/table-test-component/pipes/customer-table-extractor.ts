import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../customers';

@Pipe({
  name: 'customerTableExtractor',
})
export class CustomerTableExtractorPipe implements PipeTransform {
  public transform(customer: Customer, field: string, subfield: string): any {
    // If the customer field is an object (such as contry), we extract the subfield
    if (typeof customer[field] === 'object') {
      return customer[field][subfield];
    } else {
      return customer[field];
    }
  }
}
