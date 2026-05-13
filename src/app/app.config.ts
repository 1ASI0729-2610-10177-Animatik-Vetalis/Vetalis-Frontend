import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateService, provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom } from 'rxjs';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    ...provideTranslateService({ defaultLanguage: 'es' }),
    ...provideTranslateHttpLoader({ prefix: './i18n/', suffix: '.json' }),
    {
      provide: APP_INITIALIZER,
      useFactory: (translate: TranslateService) => () => firstValueFrom(translate.use('es')),
      deps: [TranslateService],
      multi: true,
    },
  ]
};
