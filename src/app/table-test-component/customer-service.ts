import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Customer } from './customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerServiceComponent {
  constructor(private http: HttpClient) {}

  public errorMessage: string;

  getCustomers() {
    return this.http.get<Customer[]>('assets/customers.json').pipe(
      tap((data) => {
        console.log(data);
      }),
      catchError((err) => {
        console.warn('getCustomers error!');
        console.log(err);
        this.errorMessage = err;

        throw 'Error!';
      })
    );
  }
}
