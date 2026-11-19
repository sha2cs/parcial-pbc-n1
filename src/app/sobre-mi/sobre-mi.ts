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
  resumen = 'Apasionado por el desarrollo de software, la lógica de programación y la creación de aplicaciones web';
  detalle = 'Ahora mismo estoy aprendiendo Angular y practicando Java. En mis ratos libres me gusta jugar en PC y seguir mejorando para crear mis propios proyectos.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
