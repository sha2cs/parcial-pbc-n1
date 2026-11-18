import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'perfil.jpg';
  descripcionFoto = 'Foto de perfil';
  resumen = 'Estudiante de Ingeniería informatica en UNIPAZ. Me gusta el desarrollo web.';
  detalle = 'Actualmente aprendo Angular y  En mi tiempo libre juego y escucho música.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
