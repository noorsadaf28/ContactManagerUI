import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRouting } from './app/app-routing.module';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    AppRouting,  // Include the AppRouting here
    provideHttpClient()
  ]
}).catch(err => console.error(err));
