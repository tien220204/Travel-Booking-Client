import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    // provideHttpClient(withFetch()),
    provideHttpClient(withFetch()),
    Location, // Location provider
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    // toastify config
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
};
