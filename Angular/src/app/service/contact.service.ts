import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverUrl} from '../../environments/environment';
import {Contact} from '../models/contact';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  uri = serverUrl + '/contacts';
  private _contacts: Contact[] = [];

  // tslint:disable-next-line:variable-name
  private _contactsDataUpdated$ = new Subject<Contact[]>();

  constructor(private http: HttpClient) {
  }

  getContacts(): void {
    this.http.get<Contact[]>(this.uri)
      .subscribe(contacts => this._contactsDataUpdated$.next(contacts));
  }


  get contacts(): Contact[] {
    return this._contacts;
  }

  addContact(c: Contact) {
    this.http.post<Contact>(this.uri, c).subscribe(() => this.getContacts());
  }

  get contactsUpdated$(): Subject<Contact[]>{
    return this._contactsDataUpdated$;
  }
}
