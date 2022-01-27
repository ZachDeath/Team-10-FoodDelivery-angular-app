import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User, UserAdapter } from '../shared/userConstructor';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:8090/users';
  constructor(private http: HttpClient, private adapter: UserAdapter) {}

  getAllUsers(): Observable<User[]> {
    const url = `${this.apiUrl}/getUsers`;
    return this.http
      .get(url)
      .pipe(
        map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
      );
  }
}
