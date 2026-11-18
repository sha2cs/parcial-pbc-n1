import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = '/img/gin.jpg';
  descripcionFoto = 'Foto de perfil';
  resumen = 'Estudiante de Ingeniería informatica en UNIPAZ. Me gusta el desarrollo web.';
  detalle = 'Actualmente aprendo Angular, Java y me quiero centrar en Ciberseguridad. En mi tiempo libre voy al gimnasio, comparto con amigos y fuera del estudio y el tiempo libre trabajo actualmente';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
