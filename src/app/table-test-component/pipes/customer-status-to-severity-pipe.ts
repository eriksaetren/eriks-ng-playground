import { Pipe } from '@angular/core';

@Pipe({
  name: 'customerStatusToSeverity',
})
export class CustomerStatusToSeverityPipe {
  transform(status: string) {
    switch (status) {
      case 'unqualified':
        return 'danger';
      case 'proposal':
        return 'warning';
      case 'new':
        return 'info';
      case 'qualified':
        return 'success';
    }
  }
}
