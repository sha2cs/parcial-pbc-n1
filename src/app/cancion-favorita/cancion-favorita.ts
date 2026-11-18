import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'pediré su perdón';
  artista = 'churo diaz (Compositor:Enrique Luis Carrascal)';
  motivo = 'Me encanta tocar vallenato en la guitarra.';
  enlace = 'https://youtu.be/A8kJs_tSsVk';
}