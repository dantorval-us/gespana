import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-opcion',
  standalone: true,
  imports: [],
  templateUrl: './opcion.component.html',
  styleUrl: './opcion.component.css'
})
export class OpcionComponent {

  @Input() opcion!: string;
  @Output() respuestaMarcada = new EventEmitter<string>();

  responder() {
    this.respuestaMarcada.emit(this.opcion);
  }

}
