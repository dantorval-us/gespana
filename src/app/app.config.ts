import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideFirebaseApp(() => initializeApp({
      "projectId":"gespana-g",
      "appId":"1:49734856594:web:99db07af97c832fb351b4b",
      "storageBucket":"gespana-g.appspot.com",
      "apiKey":"AIzaSyAPvpDtnS5VU7voDUniTXsj17iYWHxfjdI",
      "authDomain":"gespana-g.firebaseapp.com",
      "messagingSenderId":"49734856594"
    })), 
    provideFirestore(() => getFirestore()), 
  ]
};
