import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { ContactItemComponent } from './contact-item/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactAppComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
