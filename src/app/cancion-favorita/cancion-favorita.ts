
import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'Amarte más no pude';
  artista = 'Luister La Voz';

  motivo = 'Esta canción me identifica porque amé mucho a una mujer con todo mi corazón. Sin embargo, llegó un momento en el que, después de tantas decepciones que viví con ella, sentí que ya no podía amarla más. Es una canción que refleja mis sentimientos y una experiencia que marcó mi vida.';

  enlace = 'https://youtu.be/yZh7hqrMpAg?si=M5kaU2oKFfcxqskB';
}
