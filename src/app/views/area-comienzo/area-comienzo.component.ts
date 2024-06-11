import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TEMAS } from '../../../assets/data/config-juego';

@Component({
  selector: 'app-area-comienzo',
  standalone: true,
  imports: [],
  templateUrl: './area-comienzo.component.html',
  styleUrl: './area-comienzo.component.css'
})
export class AreaComienzoComponent implements OnInit{

  dificultadSeleccionada: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(TEMAS[0].dificultad) {
      this.dificultadSeleccionada = true;
    }
  }

  navigateNumeroPreguntas() {
    this.router.navigate(['numero-de-preguntas'])
  }

  navigateTemas() {
    this.router.navigate(['temas'])
  }

}
