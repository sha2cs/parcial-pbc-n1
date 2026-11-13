import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  // La foto tiene que estar en la carpeta public/ y llamarse exactamente igual
  foto = 'manu.jpg';
  descripcionFoto = 'Foto de perfil de Manu';
  resumen = 'Soy estudiante de Ingeniería Informática en UNIPAZ y también estudio Análisis y Desarrollo de Software en el SENA. Me apasiona crear páginas web, productos digitales y videojuegos.';
  detalle = 'Ya llevo 1 año en el SENA y voy terminando la Fase 2 de Planeación. Tengo un videojuego que está prácticamente listo para la Play Store. Me gusta pasar el día frente a la pantalla aprendiendo y sin rendirme. Soy católico y creo mucho en Dios. Me gusta el fútbol (hincha del Junior de Barranquilla) y el béisbol, y ahora juego softbol. Quiero ser un gran profesional y sacar a mi familia adelante para darles todo lo que se merecen.';
  mostrarDetalle = false;

  // Cada vez que se hace clic en el botón, cambia true <-> false
  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
