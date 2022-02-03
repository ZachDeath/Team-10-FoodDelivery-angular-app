import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registereduser } from '../shared/registeredUser.model';
import { User } from '../shared/userConstructor';
import { Message } from '../shared/messageConstructor';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  sendLoginData(enteredUser: Registereduser) {
    this.http
      .post<Registereduser>(
        'https://vibrant-petal-292416-default-rtdb.firebaseio.com/posts.json',
        enteredUser
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  submiteUsersDetails(user: User) {
    console.log(user);

    this.http
      .post<User>('http://localhost:8090/api/users/insertUser', user)
      .subscribe((users: User) => {
        users = users;
      });
  }

  submitMessage(message: Message) {
    console.log(message);

    this.http
      .post<Message>('http://localhost:8090/api/users/insertMessage', message)
      .subscribe((messages: Message) => {
        messages = messages;
      });
  }

  // getRegisteredUsers(){

  //     this.http.get('https://vibrant-petal-292416-default-rtdb.firebaseio.com/users.json').subscribe(posts => {
  //         console.log(posts);
  //     });
}
