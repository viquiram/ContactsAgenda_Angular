import { Input, Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {
  @Input() title;
  @Input() author;

  route: string;

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.route = router.url;
    });
  }

  ngOnInit() {
  }
}
