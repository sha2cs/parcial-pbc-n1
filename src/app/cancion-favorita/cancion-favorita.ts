
import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'En privado';
  artista = 'Xavi';
  motivo = 'Esta es mi canción favorita porque me gusta mucho su ritmo. Es una canción que disfruto escuchar por su estilo musical y su sonido.';

  enlace = 'https://youtu.be/kE1-O0tU-UU?si=1Y_nA8nj5D6C17bf';
}
