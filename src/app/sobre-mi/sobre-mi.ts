import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'profile_hero.png';
  descripcionFoto = 'Foto de perfil de Juan Sebastian Rodriguez Rincon';
  resumen =
    'Tengo 23 años y soy estudiante de Ingeniería Informática en el Instituto Universitario de la Paz (UNIPAZ). Me interesa la tecnología, especialmente las bases de datos, el análisis de datos y el desarrollo de soluciones digitales.';
  detalle =
    'Actualmente resido en Barrancabermeja, Colombia. Durante mi formación académica he desarrollado un interés particular por el diseño, la gestión y la optimización de bases de datos, así como por la programación y la inteligencia artificial. Me encuentro en constante proceso de aprendizaje, buscando ampliar mis conocimientos y adquirir nuevas experiencias en el campo de la tecnología.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
