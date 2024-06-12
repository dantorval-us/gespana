import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import Temas from '../interfaces/temas.interface';
import { Tema } from '../models/tema';

@Injectable({
  providedIn: 'root'
})
export class TemasService {
  
  constructor(private firestore: Firestore) { }
  
  addTemas(temas: Temas) {
    const temasRef = collection(this.firestore, 'temas');
    return addDoc(temasRef, temas);
  }

  async getTemasUsuario(usuario: string): Promise<any> {
    const temasRef = doc(this.firestore, 'temas', usuario);
    const temasSnap = await getDoc(temasRef);
    if (temasSnap.exists()) {
      return temasSnap.data();
    } else {
      console.log('No encuentra este usuario');
      return;
    }
  }

  updateTemasUsuario(usuario: string, temas: Tema[]) {
    const temasRef = doc(this.firestore, `temas/${usuario}`);
    return updateDoc(temasRef, {temas: temas});
  }

}
