import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TEMAS } from '../../../assets/data/config-juego';
import { CuestionarioService } from '../../services/cuestionario.service';

@Component({
  selector: 'app-numero-preguntas',
  standalone: true,
  imports: [],
  templateUrl: './numero-preguntas.component.html',
  styleUrl: './numero-preguntas.component.css'
})
export class NumeroPreguntasComponent implements OnInit{

  constructor(
    private router: Router,
    private cuestionarioService: CuestionarioService
  ) { }

  ngOnInit(): void {
    /* Comprobación para que cuando recargue el navegador
    no tome TEMAS vacío y lo envíe a BD */ 
    if (TEMAS.length === 0) {
      this.router.navigate(['']);
    }

    console.log('this.cuestionarioService.getTemasCuestionario():', this.cuestionarioService.getTemasCuestionario());
    this.verDatosArchivosTemas();
  }

  async verDatosArchivosTemas(): Promise<void> {
    try {
      const datos = await this.cuestionarioService.getDatosArchivosTemas();
      console.log('Datos de archivos de temas:', datos);
    } catch (error) {
      console.error('Error al obtener los datos de archivos de temas:', error);
    }
  }//////

  infinitasPreguntas() {
    this.router.navigate(['juego'])
  }

  goBack() {
    this.router.navigate([''])
  }

}
