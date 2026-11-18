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

  canciones = [
    {
      titulo: '❤️Whisper🪽',
      artista: 'Burn the Ballroom',
      motivo: 'Amo la melodia y la letra es poetica, recuerda un poco al romance gotico',
      color: '#b4d0fa',
      spotifyId: '4PSnOwlsG9tGGvy2ByVSs9'
    },
    {
      titulo: '⚔️Joan Of Arc⚜️',
      artista: 'In This Moment',
      motivo: 'Es sobre Juana De Arco, es mi personaje historico favorito',
      color: '#c0b4fa',
      spotifyId: '45OFlmffEQJWlHu8Yf6Q1R'
    },
    {
          titulo: '🗼Babylon⚙️',
          artista: 'Dirt Poor Robins',
          motivo: 'Tiene una historia interesante, ademas de su estilo de los 40s',
          color: '#b4d0fa',
          spotifyId: '1gXrhZOunxvPwhlIVJ8KMS'
    },
  {
            titulo: '🌊Would You Fall In Love With Me Again🏹',
            artista: 'Epic The Musical-Jorge Herrans',
            motivo: 'Es la ultima cancion del musical de La Odisea, cuando Odiseo y Penelope se reencuentran despues de 20 años',
            color: '#c0b4fa',
            spotifyId: '3iYeXCdD3d0zlex2v0CpVt'
      },
  {
            titulo: '☠️The Wife’s Murder Ballad🩸',
            artista: 'Lydia The Bard',
            motivo: 'Sinceramente no sabia de que trataba la cancion, solo me gusta la melodia, la cancion esta inspirada en Giulia Tofana',
            color: '#b4d0fa',
            spotifyId: '32GfQcNbzeMCDCX9i7t4D2'
      },
  {
            titulo: '🤍Confrontation🖤',
            artista: 'Dr.Jekyll & Mr.Hyde-Anthony Warlow',
            motivo: 'Es un musical inspirado en el libro original de Jekyll y Hyde, libro el cual amo y esta cancion muestra la escena final de estos dos cosa que en el libro no se ve, ademas tiene una banda sonora bellisima',
            color: '#c0b4fa',
            spotifyId: '5oLWroGhJvHACXQ5nEx692'
      },
  {
            titulo: '☀️Dr.Sunshine Is Dead☠️',
            artista: 'Will Wood',
            motivo: 'Las canciones de Will siempre son raras, pero es esa misma rareza lo que hace que me gusten',
            color: '#b4d0fa',
            spotifyId: '1cMVuTWE1CeczQqLI51Oev'
      },
  {
            titulo: '🏹Savage Daughter🌙',
            artista: 'Sarah Hester',
            motivo: 'Me gusta mucho la mitologia griega, esta cancion me recuerda a Artemisa',
            color: '#c0b4fa',
            spotifyId: '0dVnj3XPVTHfCvxpbIDOcx'
      },
  {
            titulo: '🌬️Caribbean Blue🌌',
            artista: 'Enya',
            motivo: 'combina 4 cosas que me gustan, el azul, el cielo, la tranquilidad y mitologia griega',
            color: '#b4d0fa',
            spotifyId: '5KZ4DC772dYcRBAizx0yYk'
      },
  {
            titulo: '⚡The Tower🗼',
            artista: 'NEONI',
            motivo: 'tiene vibra mediaval y habla de fortaleza personal',
            color: '#c0b4fa',
            spotifyId: '4kvo5oH2HVvPHGnZ99hGQw'
      },
  {
              titulo: '❤️Partners In Crime🔥',
              artista: 'Set It Off',
              motivo: 'Es una cancion con historia tipo Bonnie y Clide, y la melodia en general suena epica',
              color: '#b4d0fa',
              spotifyId: '4oaU0fMSg3n9kqOwmLPVhH'
        },
    {
              titulo: '🕷️El Distractor🐍',
              artista: 'Esteman',
              motivo: 'Insisto me gusta un poco mucho demaciado la mitologia y esta en especifico me es imposible no pensar en Loki xd',
              color: '#c0b4fa',
              spotifyId: '2U9clWgCEFDCwUM5Rdw6dv'
        },
    {
                  titulo: '🌌Sweet Thoot🌅',
                  artista: 'Scott Helman',
                  motivo: 'Esta cancion en una tarde, para relajarse y estar feliz es una joya, ademas suena a viaje astral jajajaja ',
                  color: '#b4d0fa',
                  spotifyId: '63EVNDkyiF4Gb1vmJLsnoP'
            },
    {
                  titulo: '☤Dangerous🪽',
                  artista: 'Epic The Musical-Jorge Herrans',
                  motivo: 'Para viajar o animarse es chevere, ademas la canta el personaje de Hermes',
                  color: '#c0b4fa',
                  spotifyId: '2sxpbOUUSzRrms8vSZwxvo'
            },
    {
                      titulo: '⚔️Golden Brown👑',
                      artista: 'The Stranglers',
                      motivo: 'Tiene melodia mediaval',
                      color: '#b4d0fa',
                      spotifyId: '6B9W97yJuTQvYL1ImrJJ6u'
                },
    {
                      titulo: '🥧Never Ever Getting Rid Of Me🛎️',
                      artista: 'Waitress-Christopher Fitzgerald',
                      motivo: 'Me la dedicaron alguna vez y me quedo gustando la cancion xd',
                      color: '#c0b4fa',
                      spotifyId: '1CZgbcEZEhHH28HcBFvQIW'
                },
    {
                          titulo: '🤠Hell´s Comin´ With Me🔥',
                          artista: 'Poor Man´s Poison',
                          motivo: 'Me ayuda a inspirarme para escribir',
                          color: '#b4d0fa',
                          spotifyId: '5N0lmKQfQpXNQNjUGlPKIT'
                    },
    {
                          titulo: '🌊Ship In A Bottle🍾',
                          artista: 'Fin Argus',
                          motivo: 'Tambien me inspira para escribir',
                          color: '#c0b4fa',
                          spotifyId: '3c5NDT3S0fLSgLjUW1KDLF'
                    },
    {
                              titulo: '🌊Soledad Y El mar🌺',
                              artista: 'Natalia Lafourcade',
                              motivo: 'Me ayuda a relajarme',
                              color: '#b4d0fa',
                              spotifyId: '1Xtz05nIgJiEYdncfd1w8h'
                        },
    {
                              titulo: '👑Killer Queen🔪',
                              artista: 'Mad Tsai',
                              motivo: 'Esta en mi playlist de Halloween, ademas esta inspirada de la pelicula Carrie',
                              color: '#c0b4fa',
                              spotifyId: '2ubQc1V6ctD8YpRjP5H940'
                        },


  ];

  cancionActivaIndex: number | null = null;
  enlaceActual: SafeResourceUrl | null = null;

  seleccionarCancion(index: number, spotifyId: string) {
    if (this.cancionActivaIndex === index) {
      this.cancionActivaIndex = null;
      this.enlaceActual = null;
      return;
    }

    this.cancionActivaIndex = index;
    this.enlaceActual = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator`
    );
  }
}
