import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'Tango egoísta';
  artista = 'Rafscrap';
  motivo = 'Único tango que me gusta.';
  idVideo = 'SYKgmUqXTMM';
  enlace = 'https://youtu.be/' + this.idVideo;
  reproductor: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.reproductor = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.idVideo
    );
  }
}