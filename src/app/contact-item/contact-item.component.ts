import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() clickRemove: EventEmitter<number> = new EventEmitter<number>();

  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit() {
  }

  removeContact() {
    this.clickRemove.emit(this.contact.id);
  }

  goDetail() {

  }
}
