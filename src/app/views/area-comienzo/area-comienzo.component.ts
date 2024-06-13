import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TEMAS } from '../../../assets/data/config-juego';
import { TemasService } from '../../services/temas.service';
import Temas from '../../interfaces/temas.interface';

@Component({
  selector: 'app-area-comienzo',
  standalone: true,
  imports: [],
  templateUrl: './area-comienzo.component.html',
  styleUrl: './area-comienzo.component.css'
})
export class AreaComienzoComponent implements OnInit{

  temasUsuario!: Temas;
  temasSeleccionados: boolean = false;

  constructor(
    private router: Router,
    private temasService: TemasService
  ) { }

  ngOnInit(): void {
    this.setTemasUsuario();
  }

  async setTemasUsuario() {
    this.temasUsuario = await this.temasService.getTemasUsuario('E2eHkrcVRwLFmXZKoSOC'); //usuario por defecto
    TEMAS.length = 0;
    TEMAS.push(...this.temasUsuario.temas);
    this.setTieneTemasSeleccionados();
  }

  setTieneTemasSeleccionados() {
    this.temasSeleccionados = TEMAS.some(tema => tema.dificultad !== null);
  }

  navigateNumeroPreguntas() {
    this.router.navigate(['numero-de-preguntas'])
  }

  navigateTemas() {
    this.router.navigate(['temas'])
  }

}
