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

  temasSeleccionados: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setTieneTemasSeleccionados();
  }

  setTieneTemasSeleccionados() {
    this.temasSeleccionados = TEMAS.some(tema => tema.dificultad !== null)
  }

  navigateNumeroPreguntas() {
    this.router.navigate(['numero-de-preguntas'])
  }

  navigateTemas() {
    this.router.navigate(['temas'])
  }

}
