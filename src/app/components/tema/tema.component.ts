import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Tema } from '../../models/tema';

@Component({
  selector: 'app-tema',
  standalone: true,
  imports: [CommonModule, FormsModule, MatRadioModule],
  templateUrl: './tema.component.html',
  styleUrl: './tema.component.css'
})
export class TemaComponent {

  @Input() tema!: Tema;
  dificultades: number[] = [1, 2, 3, 4];

  onDificultadClick(dificultad: number) {
    if (this.tema.dificultad === dificultad) {
      this.tema.dificultad = null;
    }
  }

}
