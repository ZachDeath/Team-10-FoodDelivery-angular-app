import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Employee, EmployeeAdapter } from '../shared/employeeConstructor';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private loggedIn: boolean= false;

  loginChanged = new EventEmitter<boolean>();
  loggedEmployee = new EventEmitter<Employee>();
  employeeObj:Employee;
  isLogged:boolean;
  atAdminPage:boolean;

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

  getEmployeeByEmail(email: String, password: String):Observable<any> {
    const url = `${this.apiUrl}/getEmployee/email/${email}/pass/${password}`;
    let response: Observable<any>=this.http.get(url).pipe();
    if (response!=null){
      
      return response;
    }
    return null;
  }

  employeeLoggedIn(): void{

    this.loginChanged.emit(true);
    this.isLogged=true;

  }

  employeeLoggedOut(): void{

    this.loginChanged.emit(false);
    this.employeeObj=null;
    this.updateLoggedEmployee(null);
    this.isLogged=false;
    

  }

  updateLoggedEmployee(employee: Employee): void{

    this.loggedEmployee.emit(employee);
    this.employeeObj=employee;

  }


}
