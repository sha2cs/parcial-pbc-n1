import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'turbo-granny-gato-de-dandadan_3840x2160_xtrafondos.com.jpg';
  descripcionFoto = 'Foto de perfil';
  resumen = 'Estudiante que no estudia,me gusta manejar bicicletas a toda con temor de chocar.';
  detalle = 'Actualmente estoy esperando que acabe el semestre para retomar mis salidas en bici y que la otra semana es mi cumpleaños :D';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
