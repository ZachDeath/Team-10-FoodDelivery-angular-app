import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Address, AddressAdapter } from '../shared/addressConstructor';

@Injectable({ providedIn: 'root' })
export class AddressService {
  private apiUrl = 'http://localhost:8090/api/address';

  constructor(private http: HttpClient, private adapter: AddressAdapter) {}

  // deletes a address based on id
  deleteUser(id: number): Observable<any> {
    const url = `${this.apiUrl}/deleteAddress/${id}`;
    return this.http.delete(url);
  }

  // edit a address based on id
  editUser(id: number, address: Address) {
    const url = `${this.apiUrl}/editAddress/${id}`;
    return this.http
      .post<Address>(url, address)
      .subscribe((address: Address) => {
        address = address;
      });
  }

  getUserByID(id: number): Observable<Address> {
    const url = `${this.apiUrl}/getAddressByUser/${id}`;
    let response: Observable<Address> = this.http
      .get(url)
      .pipe(map((data: any) => data.map((item) => this.adapter.adapt(item))));
    if (response != null) {
      return response;
    }
    return null;
  }
}
