import { Routes } from '@angular/router';
import { CuestionarioComponent } from './views/cuestionario/cuestionario.component';
import { AreaComienzoComponent } from './views/area-comienzo/area-comienzo.component';
import { NumeroPreguntasComponent } from './views/numero-preguntas/numero-preguntas.component';

export const routes: Routes = [
  { 
    path: '', component: AreaComienzoComponent
  },
  { 
    path: 'numero-de-preguntas', component: NumeroPreguntasComponent
  },
  { 
    path: 'juego', component: CuestionarioComponent
  },
  { path: '**', redirectTo: ''}
];

