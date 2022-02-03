import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Message, MessageAdapter } from '../shared/messageConstructor';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private apiUrl = 'http://localhost:8090/api/messages';
  constructor(private http: HttpClient, private adapter: MessageAdapter) { }

  // returns a list of messages
  getAllMessages(): Observable<Message[]> {
    const url = `${this.apiUrl}/getMessages`;
    return this.http
      .get(url)
      .pipe(map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
  }

  // deletes a messsage based on message ID
  deleteMessage(id: number): Observable<any> {
    const url = `${this.apiUrl}/deleteMessage/${id}`;
    return this.http.delete(url);
  }


}
