import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() clickRemove: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickDetail: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeContact() {
    this.clickRemove.emit(this.contact.id);
  }

  goDetail() {
    this.clickDetail.emit(this.contact.id);
  }
}
