import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TemasService } from '../../services/temas.service';
import { TemaComponent } from '../../components/tema/tema.component';
import { TEMAS } from '../../../assets/data/config-juego';
import { Tema } from '../../models/tema';

@Component({
  selector: 'app-temas',
  standalone: true,
  imports: [CommonModule, TemaComponent],
  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent implements OnInit {

  temasUsuario: Tema[] = TEMAS;

  constructor (
    private router: Router,
    private temasService: TemasService
  ) { }

  ngOnInit(): void {
    /* Comprobación para que cuando recargue el navegador
    no tome TEMAS vacío y lo envíe a BD */ 
    if (TEMAS.length === 0) {
      this.router.navigate(['']);
    }
  }

  onAceptar() {
    this.temasService.updateTemasUsuario('E2eHkrcVRwLFmXZKoSOC', this.temasUsuario); //usuario por defecto
    this.router.navigate(['']);
  }

}
