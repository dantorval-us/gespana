import { Tema } from "../models/tema";

export default interface Temas {
  id?: string,
  usuario: string,
  temas: Tema[],
}