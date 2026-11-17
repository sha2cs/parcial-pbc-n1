import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'perfil.jpg';
  descripcionFoto = 'Avatar de Yisus';
  resumen = 'Soy Jesús Alberto Turizo Hernández, estudiante de quinto semestre de Ingeniería Informática en UNIPAZ, en Barrancabermeja. Me gusta imaginar diseños de casas, estadios y otros espacios arquitectónicos.';
  detalle = 'Me gusta utilizar herramientas de inteligencia artificial para explorar mis ideas, dando las indicaciones y orientando cómo quiero que sea cada diseño. Me gustaría aprender a diseñar e innovar para desarrollar propuestas propias y mejorar mi creatividad.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
