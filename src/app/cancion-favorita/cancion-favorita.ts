import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  private sanitizer = inject(DomSanitizer);

  titulo = 'Escapismo';
  artista = 'Steven Univers';
  motivo = 'Mi diario sentir al no comprender como expresarme al hacer algo nuevo.';
  enlace = 'https://www.youtube.com/watch?v=mfxzu2hmdwY';

  mostrarReproductor = false;
  videoSeguro: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/mfxzu2hmdwY'
  );

  alternarReproductor() {
    this.mostrarReproductor = !this.mostrarReproductor;
  }
}
