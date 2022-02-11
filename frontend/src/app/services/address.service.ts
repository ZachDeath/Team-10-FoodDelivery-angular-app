import { HttpClient} from '@angular/common/http';
import {Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address, AddressAdapter } from '../shared/addressConstructor';

@Injectable({ providedIn: 'root' })
export class AddressService {
  private apiUrl = 'http://localhost:8090/api/address';

  addressObj: Address;

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
      .put<Address>(url, address)
      .subscribe((address: Address) => {
        console.log(address);
      });
  }

  getUserByID(id: number): Observable<any> {
    const url = `${this.apiUrl}/getAddressByUser/${id}`;
    let response: Observable<any> = this.http.get(url).pipe();
    if (response != null) {
      return response;
    }
    return null;
  }
}
