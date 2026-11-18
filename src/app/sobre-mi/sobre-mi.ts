import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'rulitos.jpeg';
  descripcionFoto = 'Foto de perfil';
  resumen = 'Estudiante de Ingenieria informatica de la unipaz.';
  detalle = 'Actualmente estoy aprendiendo Angular, mineria de datos entre otras cosas, me gusta jugar videojuegos como blood strike, investigar solo linux, tambien personalizar mi escritorio linux a gusto.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}