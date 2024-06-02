import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-comienzo',
  standalone: true,
  imports: [],
  templateUrl: './area-comienzo.component.html',
  styleUrl: './area-comienzo.component.css'
})
export class AreaComienzoComponent {

  constructor(private router: Router) {

  }

  navigateNumeroPreguntas() {
    this.router.navigate(['numero-de-preguntas'])
  }

  navigateTemas() {
    this.router.navigate(['temas'])
  }

}
