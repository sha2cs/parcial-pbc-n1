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

  titulo = 'Self Aware';
  artista = 'Temper City';
  motivo = 'Tiene una vibra de querer andar por la calle en la madrugada.';

  // IDs de cada plataforma
  private youtubeId = 'mh4AQkw4Jjc';
  // Reemplaza esto con el ID real de la canción en Spotify
  private spotifyTrackId = '4qW3BbQAwZsrnu8a3ZRdyT';

  // Controla qué reproductor está activo actualmente
  plataformaActiva: 'ninguno' | 'youtube' | 'spotify' = 'ninguno';

  urlYoutubeSegura: SafeResourceUrl;
  urlSpotifySegura: SafeResourceUrl;

  constructor() {
    const youtubeEmbed = `https://www.youtube.com/embed/${this.youtubeId}?autoplay=1`;
    const spotifyEmbed = `https://open.spotify.com/embed/track/${this.spotifyTrackId}?utm_source=generator&theme=0`;

    this.urlYoutubeSegura = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbed);
    this.urlSpotifySegura = this.sanitizer.bypassSecurityTrustResourceUrl(spotifyEmbed);
  }

  seleccionarPlataforma(plataforma: 'youtube' | 'spotify') {
    // Si ya estaba abierta esa misma plataforma, la cierra; si no, la abre
    this.plataformaActiva = this.plataformaActiva === plataforma ? 'ninguno' : plataforma;
  }
}
