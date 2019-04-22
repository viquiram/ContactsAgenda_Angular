import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../mock-contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts = CONTACTS;

  constructor() { }

  ngOnInit() {
  }

  removeContactById(id: number) {
    let i: number;
    for ( i = 0; i < this.contacts.length; i++) {
      if ( this.contacts[i].id === id ) {
        this.contacts.splice(i, 1);
      }
    }
  }

  onRemoveContact(id: number): void {
    this.removeContactById(id);
  }

  onGoDetail(id: number): void {

  }
}
