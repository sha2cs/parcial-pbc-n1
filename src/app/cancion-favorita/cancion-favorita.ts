import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'Hunting Soul';
  artista = 'Tosshiro';
  motivo = 'Es la cancion más esuchada de mi lista de musica, de llena de dopamina al 100%.';
  enlace = 'https://www.youtube.com/watch?v=K4hNyARBf28&list=RDK4hNyARBf28&start_radio=1';
}
