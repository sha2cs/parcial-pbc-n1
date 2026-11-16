import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {

  foto = 'semm.jpg';
  descripcionFoto = 'Foto de perfil de Sebas';
  resumen = 'Soy estudiante de Ingeniería Informática en UNIPAZ, actualmente curso el quinto semestre de la carrera en la jornada nocturna. Me gusta utilizar el lenguaje de Java y hacer mineria de datos.';
  detalle = 'Me gusta esforzarme por aprender cada dia mas sobre esta hermosa carrera, aparte a esto, me gusta hacer deporte, como ir a jugar futbol, trotar e ir al gimnasio. Me gusta pasar tiempo en familia, compartir con mis amigos y pasar tiempo agradable con las personas que quiero.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
