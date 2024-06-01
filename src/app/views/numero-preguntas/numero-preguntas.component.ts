import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numero-preguntas',
  standalone: true,
  imports: [],
  templateUrl: './numero-preguntas.component.html',
  styleUrl: './numero-preguntas.component.css'
})
export class NumeroPreguntasComponent {

  constructor(private router: Router) {

  }

  infinitasPreguntas() {
    this.router.navigate(['juego'])
  }

  goBack() {
    this.router.navigate([''])
  }

}
