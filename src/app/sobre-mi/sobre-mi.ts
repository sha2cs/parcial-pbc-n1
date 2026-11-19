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
  resumen = 'Estudiante de Ingeniería informatica en UNIPAZ. Me gusta dibujar.';
  detalle = 'Actualmente aprendo a programar bastante, en mis tiempos libres juego y dibujo al igual de escuchar musica.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}