import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { User, UserAdapter } from '../shared/userConstructor';


@Injectable({ providedIn: 'root' })
export class UserService {

  private loggedIn: boolean= false;

  loginChanged = new EventEmitter<boolean>();
  loggedUser = new EventEmitter<User>();
  userObj:User;
  islogged:boolean;
  
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

  getUserByEmail(email: String, password: String):Observable<any> {
    const url = `${this.apiUrl}/getUser/email/${email}/pass/${password}`;
    let response: Observable<any>=this.http.get(url).pipe();
    if (response!=null){
      
      return response;
    }
    return null;
  }

  userLoggedIn(): void{

    this.loginChanged.emit(true);
    this.islogged=true;

  }

  userLoggedOut(): void{

    this.loginChanged.emit(false);
    this.userObj=null;
    this.updateLoggeduser(null);
    this.islogged=false;
    

  }

  updateLoggeduser(user: User): void{
    this.loggedUser.emit(user);
    this.userObj=user;
    var test = "test item"
    localStorage.setItem("test item", test);

  }



  


}
