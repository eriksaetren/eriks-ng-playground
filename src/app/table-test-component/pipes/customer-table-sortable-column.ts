import { Pipe } from '@angular/core';

@Pipe({
  name: 'customerTableSortableColumn',
})
export class CustomerTableSortableColumnPipe {
  transform(columnVarName: string, field: string, subfield: string) {
    if (subfield !== '') {
      return columnVarName + '.' + field + '.' + subfield;
    } else {
      return columnVarName + '.' + field;
    }
  }
}
