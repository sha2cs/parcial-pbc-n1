import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'perfil.jpeg';
  descripcionFoto = 'Foto de perfil';
  resumen = 'Actualmente estoy estudiando en el Instituto Universitario de la Paz, cursando el 5to semestre de Ingeniería Informática. \nMe gusta esta carrera porque me quiero centrar en la IA, quiero crear mi propia Inteligencia Artifical y muchas mas metas, sueños y deseos muy grandes. \nActualmente tambien trabajo como ayudante de un Arquitecto, realizando distintas actividades y oficios.';
  detalle = 'Actualmente aprendo Angular y Spring Boot entre otras cosas que nos enseñanlos profesores. \nEn mi tiempo libre hgo distintas cosas como (Jugar VideoJuegos y al Futbol, Salir con amigos, Ver videos, De vez en cuando leo libros, Hago oficios(me entra una inspiracion y limpio toda la casa), Etc.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}