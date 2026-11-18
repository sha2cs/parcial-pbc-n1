import { Component } from '@angular/core';
import { Encabezado } from './encabezado/encabezado';
import { SobreMi } from './sobre-mi/sobre-mi';
import { EditarPerfil } from './editar-perfil/editar-perfil';
import { CancionFavorita } from './cancion-favorita/cancion-favorita';
import { Contacto } from './contacto/contacto';

@Component({
  selector: 'app-root',
  imports: [Encabezado, SobreMi, EditarPerfil, CancionFavorita, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
