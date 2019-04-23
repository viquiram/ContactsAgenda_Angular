import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  @Input() contact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  saveChanges() {
    this.contact.firstName = (document.getElementById('first-name') as HTMLInputElement).value;
    this.contact.lastName = (document.getElementById('last-name') as HTMLInputElement).value;
    this.contact.phone = (document.getElementById('phone') as HTMLInputElement).value;
    this.contact.email = (document.getElementById('email') as HTMLInputElement).value;
    this.contactService.modifyContact(this.contact).subscribe();
    this.goBack();
  }

  cancelChanges() {
    (document.getElementById('first-name') as HTMLInputElement).value = '';
    (document.getElementById('last-name') as HTMLInputElement).value = '';
    (document.getElementById('phone') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
    this.goBack();
  }

  deleteContact() {
    this.contactService.deleteContact(this.contact.id).subscribe();
    this.goBack();
  }

  goBack() {
    // TODO
  }
}
