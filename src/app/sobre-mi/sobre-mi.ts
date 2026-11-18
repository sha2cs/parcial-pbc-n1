
import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'daniel.jpg';
  descripcionFoto = 'Fotografía de Daniel García Atencia';

  resumen = 'Mi nombre es Daniel García Atencia. Soy estudiante de Ingeniería Informática, me gusta jugar fútbol y actualmente trabajo en construcción.';

  detalle = 'Me gusta el fútbol porque es una de las actividades que disfruto en mi tiempo libre. También trabajo en el sector de la construcción, una actividad que forma parte de mi vida cotidiana. En el ámbito tecnológico, mi lenguaje de programación favorito es Python. Me interesa seguir aprendiendo y desarrollando mis conocimientos en Ingeniería Informática.';

  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
