import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'Duerme conmigo esta noche';
  artista = 'Diomedes Diaz';
  motivo = 'Cancion de Smith para la villana de Vanessa';
  enlace = 'https://www.youtube.com/watch?v=ZP1pOPhGis4&list=RDZP1pOPhGis4&start_radio=1';
}
