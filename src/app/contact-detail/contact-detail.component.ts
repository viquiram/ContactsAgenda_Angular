import {Component, HostBinding, OnInit} from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  @HostBinding('class') classes = 'one-column';

  contactForm: FormGroup;

  id = 0;
  firstName = '';
  lastName = '';
  phone = '';
  email = '';

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstNameInput: ['', Validators.required],
      lastNameInput: ['', Validators.required],
      phoneInput: ['', Validators.required],
      emailInput: ['', [Validators.required, Validators.email]],
    });
    this.getContact();
  }

  getContact(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactService.getContact(id)
      .subscribe(contact => {
        this.id = contact.id;
        this.firstName = contact.firstName;
        this.lastName = contact.lastName;
        this.phone = contact.phone;
        this.email = contact.email;
      });
}

  saveChanges() {
    const contact = new Contact();
    contact.id = this.id;
    contact.firstName = this.firstName;
    contact.lastName = this.lastName;
    contact.phone = this.phone;
    contact.email = this.email;
    this.contactService.modifyContact(contact);
    this.goBack();
  }

  cancelChanges() {
    this.goBack();
  }

  deleteContact() {
    this.contactService.deleteContact(this.id);
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
