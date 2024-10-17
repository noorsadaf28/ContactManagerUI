import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-add-contact-page',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  template: `
    <h2 class="mb-4">Add Contact</h2> <!-- Page title -->
    <app-contact-form (submitForm)="onSubmit($event)"></app-contact-form> <!-- Contact form component -->
  `,
})
export class AddContactPageComponent {
  contact: Contact | null = null; // Holds the contact data (not used here)

  constructor(private contactService: ContactService, private router: Router) {
    this.contact = null; // Initialize contact as null
  }

  // Handle form submission and create a new contact
  onSubmit(contact: Contact): void {
    this.contactService.createContact(contact).subscribe(() => {
      this.router.navigate(['/contacts']); // Navigate to contacts list after creation
    });
  }
}
