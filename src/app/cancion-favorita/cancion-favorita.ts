import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'Something About You';
  artista = 'Eyedress feat. Dent May';
  motivo = 'Recuerdos';
  enlace = 'https://www.youtube.com/watch?v=0VAAS9xnS5U';
}
