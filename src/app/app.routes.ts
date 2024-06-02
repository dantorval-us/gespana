import { Routes } from '@angular/router';
import { CuestionarioComponent } from './views/cuestionario/cuestionario.component';
import { AreaComienzoComponent } from './views/area-comienzo/area-comienzo.component';
import { NumeroPreguntasComponent } from './views/numero-preguntas/numero-preguntas.component';
import { TemasComponent } from './views/temas/temas.component';

export const routes: Routes = [
  { 
    path: '', component: AreaComienzoComponent
  },
  { 
    path: 'numero-de-preguntas', component: NumeroPreguntasComponent
  },
  { 
    path: 'temas', component: TemasComponent
  },
  { 
    path: 'juego', component: CuestionarioComponent
  },
  { path: '**', redirectTo: ''}
];

