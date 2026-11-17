import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'Ella es mi todo';
  artista = 'Kaleth Morales';
  motivo = 'Porque es una canción muy inspiradora.';
  enlace = 'https://youtu.be/DypaBPmb5sg?si=yyHLpzDp7YaSYaWQ';
}
