import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact/Contact' ;
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private ContactUrl = 'api/contact';

  constructor(
    private http: HttpClient) {}

    getHero(id: number): Observable<Contact> {
      const url = `${this.ContactUrl}/${id}`;
      return this.http.get<Contact>(url)
    }
}
