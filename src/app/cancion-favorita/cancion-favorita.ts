import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'Bañarte en mis sueños';
  artista = 'Binomio de Oro de América';
  motivo = 'Me identifico con esta canción porque su letra refleja una experiencia que viví en la vida real. Por eso tiene un significado especial para mí.';
  enlace = 'https://www.youtube.com/watch?v=FRXf0xbXLmc';
}
