import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { Contact } from '../contact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-contact-page',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  template: `
    <h2 class="mb-4">Edit Contact</h2> <!-- Page title -->
    <app-contact-form (submitForm)="onSubmit($event)"></app-contact-form> <!-- Contact form component -->
  `,
})
export class EditContactPageComponent implements OnInit {
  contact: Contact | null = null; // Holds the contact data

  constructor(
    private contactService: ContactService, // Service to manage contacts
    private route: ActivatedRoute, // For retrieving route parameters
    private router: Router // For navigation
  ) { }

  ngOnInit(): void {
    // Get the contact ID from the route parameters
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Fetch the contact details for the specified ID
    this.contactService.getContact(id).subscribe((contact) => {
      this.contact = contact; // Store the fetched contact
      console.log("data- ", this.contact); // Log the contact data
    });
  }

  // Handle form submission and update the contact
  onSubmit(contact: Contact): void {
    console.log("here", contact); // Log the submitted contact data
    this.contactService.updateContact(contact).subscribe(() => {
      this.router.navigate(['/contacts']); // Navigate to the contacts list after update
    });
  }
}
