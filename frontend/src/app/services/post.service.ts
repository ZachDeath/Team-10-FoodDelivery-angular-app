import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registereduser } from '../shared/registeredUser.model';
import { User } from '../shared/userConstructor';
import { Message } from '../shared/messageConstructor';
import { Employee } from '../shared/employeeConstructor';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  submiteUsersDetails(user: User) {
    console.log(user);

    this.http
      .post<User>('http://localhost:8090/api/users/insertUser', user).pipe()
      .subscribe();

      
  }

  submitMessage(message: Message) {
    console.log(message);

    this.http
      .post<Message>('http://localhost:8090/api/messages/insertMessage', message)
      .subscribe((messages: Message) => {
        messages = messages;
      });
  }

  createEmployee(employee: Employee) {
    console.log(employee);

    this.http
      .post<Employee>('http://localhost:8090/api/employees/insertEmployee', employee).pipe()
      .subscribe();
  }



  // getRegisteredUsers(){

  //     this.http.get('https://vibrant-petal-292416-default-rtdb.firebaseio.com/users.json').subscribe(posts => {
  //         console.log(posts);
  //     });
}
