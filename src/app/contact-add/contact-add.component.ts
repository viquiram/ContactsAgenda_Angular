import {Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  contactForm: FormGroup;

  firstName = '';
  lastName = '';
  phone = '';
  email = '';

  constructor(private contactService: ContactService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstNameInput: ['', Validators.required],
      lastNameInput: ['', Validators.required],
      phoneInput: ['', Validators.required],
      emailInput: ['', [Validators.required, Validators.email]],
    });
  }

  saveContact() {
    const newContact: Contact = new Contact();
    newContact.firstName = this.firstName;
    newContact.lastName = this.lastName;
    newContact.phone = this.phone;
    newContact.email = this.email;
    this.contactService.addContact(newContact);
  }

  resetContact() {
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.email = '';
  }
}
