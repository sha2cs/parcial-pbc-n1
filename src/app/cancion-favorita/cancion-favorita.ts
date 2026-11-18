import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'BIRDBRAIN';
  artista = 'JamieP';
  motivo = 'me agrada demasiado la cancion.';
}