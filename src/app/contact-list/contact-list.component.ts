import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = []; // Stores the list of contacts
  contactToDeleteId: number | null = null; // ID of the contact to delete

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.loadContacts(); // Load contacts when the component initializes
  }

  // Fetches the list of contacts from the server
  loadContacts(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  // Deletes a contact by ID and reloads the list
  onDelete(id: number): void {
    this.contactService.deleteContact(id).subscribe(() => {
      this.loadContacts();
    });
  }

  // Opens the modal and sets the ID of the contact to be deleted
  openDeleteModal(id: number): void {
    this.contactToDeleteId = id;
  }

  // Confirms deletion of the contact and reloads the list
  confirmDelete(): void {
    if (this.contactToDeleteId !== null) {
      this.contactService.deleteContact(this.contactToDeleteId).subscribe(() => {
        this.loadContacts(); // Reload contacts after deletion
        this.contactToDeleteId = null; // Reset the contact ID
      });
    }
  }
}
