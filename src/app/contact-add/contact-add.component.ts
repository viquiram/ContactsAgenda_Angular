import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveContact() {
    // TODO
  }

  resetContact() {
    (document.getElementById('first-name') as HTMLInputElement).value = '';
    (document.getElementById('last-name') as HTMLInputElement).value = '';
    (document.getElementById('phone') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
  }
}
