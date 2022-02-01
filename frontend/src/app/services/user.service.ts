import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { User, UserAdapter } from '../shared/userConstructor';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:8090/api/users';
  constructor(private http: HttpClient, private adapter: UserAdapter) {}

  // returns a list of users
  getAllUsers(): Observable<User[]> {
    const url = `${this.apiUrl}/getUsers`;
    return this.http
      .get(url)
      .pipe(map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
  }

  // deletes a user based on user ID
  deleteUser(id: number): Observable<any> {
    const url = `${this.apiUrl}/deleteUser/${id}`;
    return this.http.delete(url);
  }


}
