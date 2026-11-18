import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'Runaway';
  artista = 'AURORA';
  motivo = 'Me gusta por el ritmo que tiene y la tranquilidad que me da al escucharla.';
  enlace = 'https://www.youtube.com/watch?v=3iIwB0oK8SA';
}