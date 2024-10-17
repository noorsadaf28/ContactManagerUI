# Contact Manager Application (Frontend)

## Overview
This is the frontend of the Contact Manager application, built using **Angular**. It allows users to manage contact information, including creating, reading, updating, and deleting contacts. The application is styled using **Bootstrap** and state is managed using **RxJS** for efficient communication between components and services.

## Frontend Details
- **Framework**: Angular
- **Version**: Angular 13+
- **Architecture**: Standalone components
- **State Management**: RxJS (BehaviorSubject for state control)
- **Forms**: Angular Reactive Forms
- **Routing**: Angular Router for navigation between components
- **Styling**: Bootstrap (Latest stable version)

### Technologies Used

| Technology | Version | Description |
|------------|---------|-------------|
| Angular    | 13+     | Frontend framework for the application. |
| RxJS       | 6+      | State management and reactive programming. |
| Bootstrap  | 5.x     | CSS framework for responsive design. |
| Node.js    | 14+     | Required for the Angular development server. |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/noorsadaf28/ContactManagerUI.git
   
2. Navigate to the frontend folder:
  cd contact-manager/frontend

3. cd contact-manager/frontend
  npm install

4. Run the application:
  ng serve

5. Navigate to the application in your browser:
  http://localhost:4200

## Features
  1. Contact List
  2. Displays all contacts in a tabular format.
  3. Provides options to edit or delete each contact.
  4. Add Contact
  5. Form with input fields for:
      First Name
      Last Name
      Email
      Password
  6. Input validation:
      First and last names are required.
      Email must be in a valid format.
      Submits new contacts to the backend.
      Password required
  7. Edit Contact
    Allows the user to update an existing contact.
    Populates the form with the selected contact’s current details.
  8. Delete Contact
    Provides an option to delete a contact.
    The state of the contact list is automatically updated upon deletion using RxJS.
  9. State Management
    The application uses RxJS with BehaviorSubject to manage the contact list's state:
    ContactService maintains a BehaviorSubject which holds the current list of contacts.
    All components subscribing to the contact list will automatically update whenever the state changes (for example, when a contact is added, edited, or deleted).

## Angular Components
1. AppComponent: The main entry point for the application, includes navigation and routes.
2. ContactListComponent: Displays all contacts and provides actions for editing or deleting a contact.
3. ContactFormComponent: A reusable form component used for both adding and editing contacts, includes form validation.
4. AddContactPageComponent: Dedicated page for adding a new contact using ContactFormComponent.
5. EditContactPageComponent: Dedicated page for editing an existing contact using ContactFormComponent.

## API Details
This frontend application communicates with a .NET Core backend to manage contact data. Below are the details of the available API endpoints:
| Method | Endpoint           | Description                       |
|--------|--------------------|-----------------------------------|
| GET    | /api/contacts      | Fetches the list of all contacts. |
| GET    | /api/contacts/{id }| Fetches a contact by ID.          |
| POST   | /api/contacts      | Creates a new contact.            |
| PUT    | /api/contacts/{id} | Updates an existing contact..     |
| DELETE | /api/contacts/{id} | Deletes a contact by ID.          |

## Routing
The application uses Angular Router to enable navigation between different pages:
1. /contacts – Displays the contact list.
2. /add-contact – Displays the form to add a new contact.
3. /edit-contact/:id – Displays the form to edit an existing contact.
The application uses RouterModule to handle navigation between components and ensure a smooth user experience.

## Conclusion
This frontend is a fully functional contact management system, built using modern Angular practices with standalone components and RxJS for state management. The backend API is built using .NET Core and provides CRUD operations. The application is responsive and scalable, ensuring a smooth user experience across different devices.
text