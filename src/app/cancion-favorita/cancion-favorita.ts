import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'El día de mi suerte';
  artista = 'Willie Colón & Héctor Lavoe';
  motivo = 'Porque no me gusta rendirme: no hay necio que no triunfe, y yo soy muy terco.';
  enlace = 'https://youtu.be/vNJsd7ZCAI0';
}
