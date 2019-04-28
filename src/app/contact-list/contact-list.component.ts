import {Component, HostBinding, OnInit} from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @HostBinding('class') classes = 'two-column';

  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  onRemoveContact(id: number): void {
    this.contactService.deleteContact(id)
      .subscribe(contacts => this.contacts = contacts);
  }

  onGoDetail(id: number): void {
    this.router.navigate(['/contact/', id]);
  }
}
