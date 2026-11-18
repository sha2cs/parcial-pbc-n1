import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'perfil.png';
  descripcionFoto = 'Foto de perfil';
  resumen = 'Estudiante de Ingeniería Informatica en UNIPAZ. Me gusta el desarrollo web y base de datos';
  detalle = 'Actualmente aprendo Angular y Base de datos. En mi tiempo libre juego Rugby y escucha música.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
