import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  contacts: Contact[];

  constructor() {
    this.contacts = store.get('contacts');
    if (this.contacts == null) {
      this.contacts = CONTACTS;
    }
  }

  public getContacts(): Observable<Contact[]> {
    return of(this.contacts);
  }

  deleteContact(id: number): Observable<Contact[]> {
    let i: number;
    for (i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        const confirmation = confirm("Do you want to remove " +
          this.contacts[i].firstName + " " + this.contacts[i].lastName +
          " from your contacts?");
        if (confirmation) {
          this.contacts.splice(i, 1);
          store.set('contacts', this.contacts);
          return of(this.contacts);
        }
      }
    }
  }

  addContact(contact: Contact): Observable<Contact[]> {
    let i: number;
    for (i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id !== i) {
        contact.id = i;
        this.contacts.splice(i, 0, contact);
        store.set('contacts', this.contacts);
        alert("The new contact has been saved successfully.");
        return of(this.contacts);
      }
    }
    contact.id = this.contacts.length;
    this.contacts.push(contact);
    store.set('contacts', this.contacts);
    alert("The new contact has been saved successfully.");
    return of(this.contacts);
  }

  modifyContact(contact: Contact): Observable<Contact[]> {
    let i: number;
    for (i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === contact.id) {
        this.contacts.splice(i, 1, contact);
        store.set('contacts', this.contacts);
        return of(this.contacts);
      }
    }
  }

  getContact(id: number): Observable<Contact> {
    let i: number;
    for (i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        return of(this.contacts[i]);
      }
    }
  }
}
