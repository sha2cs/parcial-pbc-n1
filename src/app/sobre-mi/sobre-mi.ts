
import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'foto.jpg';
  descripcionFoto = 'Foto de perfil de Jhon Ricardo Alvarez Ortega';

  resumen = 'Soy Jhon Ricardo Alvarez Ortega, estudiante de quinto semestre de Ingeniería Informática en el Instituto Universitario de la Paz (UNIPAZ), en la jornada nocturna. Me considero una persona perseverante, sentimental y con muchas ganas de salir adelante.';

  detalle = 'Algo que me define es mi perseverancia, porque a pesar de las dificultades siempre busco la manera de seguir adelante. Soy una persona que valora mucho los sentimientos y que cuando ama, lo hace de corazón. Mi propósito es continuar preparándome, superar los obstáculos y alcanzar mis metas personales y profesionales.';

  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
