import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TEMAS } from '../../../assets/data/config-juego';

@Component({
  selector: 'app-numero-preguntas',
  standalone: true,
  imports: [],
  templateUrl: './numero-preguntas.component.html',
  styleUrl: './numero-preguntas.component.css'
})
export class NumeroPreguntasComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
    /* Comprobación para que cuando recargue el navegador
    no tome TEMAS vacío y lo envíe a BD */ 
    if (TEMAS.length === 0) {
      this.router.navigate(['']);
    }
  }

  infinitasPreguntas() {
    this.router.navigate(['juego'])
  }

  goBack() {
    this.router.navigate([''])
  }

}
