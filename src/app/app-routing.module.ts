import { Routes, provideRouter } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactPageComponent } from './pages/add-contact-page.component';
import { EditContactPageComponent } from './pages/edit-contact-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'add-contact', component: AddContactPageComponent },
  { path: 'edit-contact/:id', component: EditContactPageComponent },
];

export const AppRouting = provideRouter(routes);
