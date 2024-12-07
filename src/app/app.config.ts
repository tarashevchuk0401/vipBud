import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { isDevMode } from '@angular/core'

import { routes } from './app.routes'

import { provideHttpClient } from '@angular/common/http'
import { TranslocoHttpLoader } from './transloco-loader'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideTransloco } from '@ngneat/transloco'
import { provideAnimations } from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAnimations(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'pl', 'uk'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
}
