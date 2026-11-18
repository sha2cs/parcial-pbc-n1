import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  // Comillas dobles porque el título lleva apóstrofo (They Don't...).
  titulo = "They Don't Care About Us";
  artista = 'Michael Jackson';
  motivo =
    'Me gusta esta canción porque tiene un ritmo que me transmite mucha energía y su mensaje me parece muy poderoso, habla de las injusticias y de no quedarse callado ante lo que está mal.';
  enlace = 'https://youtu.be/QNJL6nfu__Q';
}
