import { Injectable } from '@angular/core';
import { Tema } from '../models/tema';
import { TEMAS } from '../../assets/data/config-juego';
import { MAPEO_ARCHIVOS } from '../../assets/data/mapeo-archivos';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  bateriaPreguntas: any[] = []

  constructor() {}

  getTemasCuestionario(): Tema[] {
    const temasCuestionario = TEMAS.filter(tema => tema.dificultad !== null)
    return temasCuestionario;
  }

  async getDatosArchivosTemas(): Promise<any[]> {
    const temas = this.getTemasCuestionario();
    const archivos = temas.map(tema => this.normalizarNombreArchivo(tema.nombre));
  
    const datos = await Promise.all(archivos.map(async archivo => {
      if (MAPEO_ARCHIVOS[archivo]) {
        const dataModule = await MAPEO_ARCHIVOS[archivo]();
        return dataModule.default; // Asumiendo que el archivo exporta un default con los datos
      } else {
        console.warn(`No se encontró el archivo mapeado para: ${archivo}`);
        return null;
      }
    }));
  
    return datos.filter(dato => dato !== null);
  }

  normalizarNombreArchivo(nombre: string): string {
    return nombre
      .toLowerCase()
      .normalize('NFD') // Normalizar a Unicode Normalization Form Decomposition
      .replace(/[\u0300-\u036f]/g, '') // Eliminar marcas diacríticas
      .replace(/\s+/g, '-'); // Reemplazar espacios por guiones
  }


}
