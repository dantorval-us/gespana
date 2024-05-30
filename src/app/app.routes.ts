import { Routes } from '@angular/router';
import { GespanaComponent } from './views/gespana/gespana.component';

export const routes: Routes = [
  { 
    path: '', component: GespanaComponent
  },
  { path: '**', redirectTo: ''}
];

