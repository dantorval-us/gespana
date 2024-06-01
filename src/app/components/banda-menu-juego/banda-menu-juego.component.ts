import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banda-menu-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banda-menu-juego.component.html',
  styleUrl: './banda-menu-juego.component.css'
})
export class BandaMenuJuegoComponent {

  constructor(private router: Router) {

  }

  @Input() respondido!: boolean;

  onFinalizar() {
    this.router.navigate([''])
  }

}
