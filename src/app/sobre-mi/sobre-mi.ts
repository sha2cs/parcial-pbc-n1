import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'fotoParcial.jpeg';
  descripcionFoto = 'Foto de perfil';
  resumen = 'hambre y sueño es lo que tengo';
  detalle = 'Soy estudiante, trabajo durante el dia y me gusta salir a distraerme un poco';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
