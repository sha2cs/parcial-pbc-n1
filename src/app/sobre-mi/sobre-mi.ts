
import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'keener.jpeg'; // Debe coincidir con el nombre del archivo que pusiste en public/
  descripcionFoto = 'Foto de Keener Mendoza';
  resumen = 'Estudiante de Ingeniería Informática en el Instituto Universitario de la Paz (UNIPAZ). Apasionado por la musica y la programación.';
  detalle = 'Me gusta programar en Java, construir interfaces y explorar comandos de sistemas. En mi tiempo libre toco la guitarra y disfruto escuchando vallenato.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}