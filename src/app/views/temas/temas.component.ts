import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TemaComponent } from '../../components/tema/tema.component';

import { TEMAS } from '../../../assets/data/config-juego';

@Component({
  selector: 'app-temas',
  standalone: true,
  imports: [CommonModule, TemaComponent],
  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent {

  temas = TEMAS;

  constructor(private router: Router) {

  }

  onBack() {
    this.router.navigate(['']);
  }

}
