import {Component, OnInit} from '@angular/core';
import {Contact} from './models/contact';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from './service/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  title: 'titel';
  contacts: Contact[] = this.contactService.contacts;


  addContactForm = new FormGroup({
    firstname: new FormControl('', Validators.pattern('[a-zA-Z-\s]*')),
    surname: new FormControl('', Validators.pattern('[a-zA-Z-\s]*')),
    email: new FormControl('', Validators.pattern('^.+@.+\.nl$'))
  });

  constructor(private contactService: ContactService) {
  }

  addContact(): void {
    this.contactService.addContact(this.addContactForm.value);
  }

  ngOnInit(): void {
    this.contactService.contactsUpdated$.subscribe((contacts) => this.contacts = contacts
    );
    this.contactService.getContacts();
  }
}
