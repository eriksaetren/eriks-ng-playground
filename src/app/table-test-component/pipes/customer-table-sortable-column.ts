import { Pipe } from '@angular/core';

@Pipe({
  name: 'customerTableSortableColumn',
})
export class CustomerTableSortableColumnPipe {
  transform(column: object) {
    // If there is a subfield, we want to include that in the returned expression
    if (column['subfield']) {
      return column['field'] + '.' + column['subfield'];
    }
    // No subfield
    else {
      return column['field'];
    }
  }
}
