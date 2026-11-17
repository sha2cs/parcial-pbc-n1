import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'perfil.jpg';
  descripcionFoto = 'Foto de perfil';
  resumen = 'Soy estudiante de Ingeniería informática en el instituto universitario de la UNIPAZ, actualmente curso 5 semestre. También trabajo tiempo completo con Aspaen Colegio el Rosario como auxiliar de tecnología y llevo laborando 6 años. Mis hobbies son jugar video juegos y escuchar música. Me gusta base de datos, SQL y HTML.';
  detalle = 'Actualmente estoy aprendiendo Angular y Java.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
