import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'Muere Una Flor';
  artista = 'Binomio de oro';
  motivo = 'Porque me recuerda al amor de mi familia y los cuidados que se deben tener en una relacion.';
  enlace = 'https://youtu.be/JgtVlDYRm4Q?si=YVA6cKDICYbqtA5x';
}
