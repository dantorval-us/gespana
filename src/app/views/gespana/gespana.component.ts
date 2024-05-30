import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OpcionComponent } from "../../components/opcion/opcion.component";
import { ComunidadesAutonomasService } from '../../services/comunidades-autonomas.service';

@Component({
    selector: 'app-gespana',
    standalone: true,
    templateUrl: './gespana.component.html',
    styleUrl: './gespana.component.css',
    imports: [OpcionComponent, CommonModule, FormsModule]
})
export class GespanaComponent implements OnInit{

  nivel: number = 3;
  niveles: Map<number, number>;
  pregunta: string = '';
  respuesta: string = '';
  opciones: string[] = [];
  respondido: boolean = false;
  respuestaMarcada: string = '';
  acierto!: boolean;
  mensajeSolucion: string = 'Respuesta';

  constructor(private comunidadesAutonomasService: ComunidadesAutonomasService) {
    this.niveles = new Map<number, number>([
      [1, 4],
      [2, 6],
      [3, 8],
      [4, 0]
    ]);
  }

  ngOnInit(): void {
    this.onComienzo();
  }

  onComienzo(): void {
    this.respondido = !this.respondido;
    // this.setNivel(nivel);
    this.setPreguntaYRespuesta();
    this.setOpciones(this.nivel);
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
    const numOpciones = this.niveles.get(nivel);
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
