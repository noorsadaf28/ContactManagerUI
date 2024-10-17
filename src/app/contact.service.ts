import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from './contact.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // Available throughout the app
})
export class ContactService {
  private apiUrl = 'http://localhost:5234/api/Contacts'; // API URL for contacts
  private contactSubject = new BehaviorSubject<Contact[]>([]); // State management with RxJS

  constructor(private http: HttpClient) { } // Injecting HttpClient

  // Fetch all contacts
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  // Fetch a contact by ID
  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${id}`);
  }

  // Load and update contacts in BehaviorSubject
  loadContacts(): void {
    this.http.get<Contact[]>(this.apiUrl).subscribe((contacts) => {
      this.contactSubject.next(contacts);
    });
  }

  // Create a new contact and reload contacts
  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact).pipe(
      tap(() => this.loadContacts())
    );
  }

  // Update an existing contact and reload contacts
  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${contact.id}`, contact).pipe(
      tap(() => this.loadContacts())
    );
  }

  // Delete a contact and reload contacts
  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.loadContacts())
    );
  }
}
