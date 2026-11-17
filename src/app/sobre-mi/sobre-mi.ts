import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'foto.jpg';
  descripcionFoto = 'Foto de perfil de Anyelo';
  resumen = 'Soy estudiante de Ingeniería Informática en el Instituto Universitario de la Paz (UNIPAZ), actualmente en quinto semestre. Me gusta todo lo que tiene que ver con mi carrera.';
  detalle = 'Estudio y trabajo al mismo tiempo, y trato de salir adelante y dar lo mejor de mí. Me gusta jugar fútbol. Me considero una buena persona, amable y gentil.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
