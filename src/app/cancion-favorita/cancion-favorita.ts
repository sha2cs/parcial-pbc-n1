import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'Enemy';
  artista = 'Tommee Profitt, Beacon Light, Sam Tinnesz';
  motivo = 'Me gusta el ritmo.';
  enlace = 'https://www.youtube.com/watch?v=e-xToC9wNl0&list=RDe-xToC9wNl0&start_radio=1'; // TODO: enlace directo (YouTube o Spotify)
}
