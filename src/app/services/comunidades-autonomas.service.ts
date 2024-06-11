import { Injectable } from '@angular/core';
import { ComunidadAutonoma } from '../models/comunidad-autonoma';
import { COMUNIDADES_AUTONOMAS } from '../../assets/data/comunidades-autonomas';

@Injectable({
  providedIn: 'root'
})
export class ComunidadesAutonomasService {

  bateriaPreguntas = [...COMUNIDADES_AUTONOMAS];
  bateriaRespuestas = [...COMUNIDADES_AUTONOMAS];

  constructor() { }

  getPreguntaAndDelete(): string[] {
    const randomIndex = Math.floor(Math.random() * this.bateriaPreguntas.length);
    const mapa = this.bateriaPreguntas[randomIndex].mapa;
    const nombre = this.bateriaPreguntas[randomIndex].nombre;
    const id = this.bateriaPreguntas[randomIndex].id;
    const comunidadAutonomaAleatoria = [mapa, nombre]
    
    this.descartarPregunta(id);

    if (this.bateriaPreguntas.length === 0) { 
      this.resetBateriaPreguntas();
    }

    return comunidadAutonomaAleatoria;
  }

  descartarPregunta(id: number): void {
    this.bateriaPreguntas = this.bateriaPreguntas.filter(comunidad => comunidad.id !== id);
  }

  getOpciones(cantidad: number): string[] {
    const opciones: string[] = [];
    for (let i=0; i<cantidad; i++) {
      const randomIndex = Math.floor(Math.random() * this.bateriaRespuestas.length);
      const comunidad = this.bateriaRespuestas[randomIndex];
      const opcion = comunidad.nombre;
      opciones.push(opcion);

      /* Elimina respuesta para que no se repita */
      this.bateriaRespuestas.splice(randomIndex, 1);
    }

    this.resetBateriaRespuestas();

    return opciones;
  }

  resetBateriaPreguntas(): void{
    this.bateriaPreguntas = [...COMUNIDADES_AUTONOMAS];
  }

  resetBateriaRespuestas(): void{
    this.bateriaRespuestas = [...COMUNIDADES_AUTONOMAS];
  }

}
