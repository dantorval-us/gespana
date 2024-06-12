import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import Temas from '../../interfaces/temas.interface';
import { TemasService } from '../../services/temas.service';
import { TemaComponent } from '../../components/tema/tema.component';
import { TEMAS } from '../../../assets/data/config-juego';

@Component({
  selector: 'app-temas',
  standalone: true,
  imports: [CommonModule, TemaComponent],
  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent implements OnInit {

  temasUsuario: Temas;

  constructor (
    private router: Router,
    private temasService: TemasService
  ) { 
    this.temasUsuario = {
      usuario: 'por defecto',
      temas: [],
    }
  }

  ngOnInit(): void {
    this.setTemasUsuario();
  }

  async setTemasUsuario() {
    this.temasUsuario = await this.temasService.getTemasUsuario('E2eHkrcVRwLFmXZKoSOC'); //usuario por defecto
    TEMAS.length = 0;
    TEMAS.push(...this.temasUsuario.temas);
  }

  onAceptar() {
    this.temasService.updateTemasUsuario('E2eHkrcVRwLFmXZKoSOC', this.temasUsuario.temas); //usuario por defecto
    this.router.navigate(['']);
  }

}
