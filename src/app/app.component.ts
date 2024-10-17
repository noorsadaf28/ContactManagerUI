// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { ContactFormComponent } from './contact-form/contact-form.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, ContactFormComponent],
//   template: `
//         <div class="container">
//             <h1>Contact Manager</h1>
//             <app-contact-form (contactCreated)="loadContacts()"></app-contact-form>
//             <router-outlet></router-outlet>
//         </div>
//     `,
// })
// export class AppComponent { }
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container mt-5">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .navbar-brand {
        font-size: 1.5rem;
      }
    `,
  ]
})
export class AppComponent { }
