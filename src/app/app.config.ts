import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideFirebaseApp(() => initializeApp({
      "projectId":"gespana-d847c",
      "appId":"1:554839476562:web:344795c52b980956f4528b",
      "storageBucket":"gespana-d847c.appspot.com",
      // "locationId":"europe-west",
      "apiKey":"AIzaSyCLkabivrXY4mXFnmP8sLkSVGl2vKBuJjA",
      "authDomain":"gespana-d847c.firebaseapp.com",
      "messagingSenderId":"554839476562"
    })), 
    provideStorage(() => getStorage())]
};
