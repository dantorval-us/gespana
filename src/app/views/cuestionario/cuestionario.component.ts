import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OpcionComponent } from "../../components/opcion/opcion.component";
import { BandaMenuJuegoComponent } from "../../components/banda-menu-juego/banda-menu-juego.component";
import { ComunidadesAutonomasService } from '../../services/comunidades-autonomas.service';
import { TEMAS } from '../../../assets/data/config-juego';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cuestionario',
    standalone: true,
    templateUrl: './cuestionario.component.html',
    styleUrl: './cuestionario.component.css',
    imports: [OpcionComponent, BandaMenuJuegoComponent, CommonModule, FormsModule]
})
export class CuestionarioComponent implements OnInit{

  dificultad!: number | null;
  nPreguntasXDifitultad: Map<number, number>;
  pregunta: string = '';
  respuesta: string = '';
  opciones: string[] = [];
  respondido: boolean = false;
  respuestaMarcada: string = '';
  acierto!: boolean;
  mensajeSolucion: string = 'Respuesta';

  constructor(
    private comunidadesAutonomasService: ComunidadesAutonomasService,
    private router: Router
  ) {
    this.nPreguntasXDifitultad = new Map<number, number>([
      [1, 4],
      [2, 6],
      [3, 8],
      [4, 0]
    ]);
    // this.dificultad = TEMAS[0].dificultad;
  }

  ngOnInit(): void {
    /* Comprobación para que cuando recargue el navegador
    no tome TEMAS vacío y lo envíe a BD */ 
    if (TEMAS.length === 0) {
      this.router.navigate(['']);
    } else {
      this.dificultad = TEMAS[0].dificultad;
      this.onComienzo();
    }
  }

  handleContinuar(event: MouseEvent): void {
    if (event.target === event.currentTarget)
      this.onComienzo();
  }

  onComienzo(): void {
    this.respondido = !this.respondido;
    // this.setNivel(nivel);
    this.setPreguntaYRespuesta();
    this.setOpciones(this.dificultad!);
  }

  // setNivel(nivel: number): void {
  //   this.nivel = nivel;
  // }

  setPreguntaYRespuesta(): void {
    const comunidadAutonomaAleatoria = this.comunidadesAutonomasService.getPreguntaAndDelete();
    this.pregunta = comunidadAutonomaAleatoria[0];
    this.respuesta = comunidadAutonomaAleatoria[1];
  }

  setOpciones(nivel: number): void {
    this.opciones = []
    this.generarOpciones(nivel);
  }

  generarOpciones(nivel: number): void {
    const numOpciones = this.nPreguntasXDifitultad.get(nivel);
    this.opciones = this.comunidadesAutonomasService.getOpciones(numOpciones!-1);
    this.opciones.push(this.respuesta); 
    this.opciones = this.shuffleArray(this.opciones);
  }

  evaluarRespuesta(respuestaMarcada: string) {
    this.respuestaMarcada = respuestaMarcada;
    if (this.respuesta === respuestaMarcada) {
      this.mensajeSolucion = 'Respuesta Correcta';
      this.acierto = true;
    } else {
      this.mensajeSolucion = 'Respuesta Incorrecta';
      this.acierto = false;
    }
    this.respondido = !this.respondido;
  }

  /* Reordena opciones aleatoriamente */
  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
