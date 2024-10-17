import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Contact } from '../contact.model';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  @Input() contact: Contact | null = null; // Input contact data for editing
  @Output() submitForm = new EventEmitter<Contact>(); // Output event to submit form

  contactForm!: FormGroup; // Form group to manage the contact form
  contactId!: number; // Holds the ID of the contact (if editing)

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Get contact ID from route parameters
    this.contactId = +this.route.snapshot.paramMap.get('id')!;

    // Initialize the form with default values or existing contact data
    this.contactForm = this.fb.group({
      id: [this.contactId || 0],
      firstName: [this.contact?.firstName || '', Validators.required],
      lastName: [this.contact?.lastName || '', Validators.required],
      email: [this.contact?.email || '', [Validators.required, Validators.email]],
      password: [this.contact?.password || '', [Validators.required]],
      passwordHash: ""
    });

    // Load contact data if editing
    if (this.contactId) {
      this.loadContact(this.contactId);
    }
  }

  // Fetch contact details to populate the form for editing
  loadContact(id: number): void {
    this.contactService.getContact(id).subscribe((contact: Contact) => {
      this.contactForm.patchValue({
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email
      });
    });
  }

  // Handle form submission and emit event with form data
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitForm.emit(this.contactForm.value); // Emit form data if valid
    }
  }
}
