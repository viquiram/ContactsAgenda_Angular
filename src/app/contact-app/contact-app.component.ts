import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {
  @Input() title;
  @Input() author;

  constructor() { }

  ngOnInit() {
  }
}
