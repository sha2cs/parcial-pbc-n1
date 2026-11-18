import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'foto B.jpeg';
  descripcionFoto = 'Foto de perfil';
  resumen = 'Estudiante de Ingeniería de Sistemas en UNIPAZ. Me gusta el desarrollo web.';
  detalle = 'Actualmente aprendo Angular y Spring Boot. En mi tiempo libre escucho música, leo, dibujo, hago manualidades, veo Monster y Los diarios de la boticaria y juego o salgo con amig@s.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
