import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee, EmployeeAdapter } from '../shared/employeeConstructor';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private apiUrl = 'http://localhost:8090/api/employees';
  constructor(private http: HttpClient, private adapter: EmployeeAdapter) {}

  // returns a list of employees
  getAllEmployees(): Observable<Employee[]> {
    const url = `${this.apiUrl}/getEmployees`;
    return this.http
      .get(url)
      .pipe(map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
  }

  // deletes a employee based on employee ID
  deleteEmployee(id: number): Observable<any> {
    const url = `${this.apiUrl}/deleteEmployee/${id}`;
    return this.http.delete(url);
  }


}
