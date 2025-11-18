import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { runInInjectionContext } from '@angular/core';
import { AuthService } from './app/shared/services/auth.service';

bootstrapApplication(AppComponent, appConfig)
  .then((appRef) => {
    const injector = appRef.injector;
    return runInInjectionContext(injector, () => {
      return injector.get(AuthService).restoreSession(); // Phải trả về Promise nếu restoreSession là async
    });
  })
  .catch((err) => console.error(err));
