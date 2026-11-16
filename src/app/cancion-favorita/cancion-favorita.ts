import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {

  titulo = 'Niña bonita';
  artista = 'Chino & Nacho';
  motivo = 'Me recuerda a una personita especial <3.';
  archivoAudio = 'niña.mp3';
  
}

