import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  imports: [FormsModule], // FormsModule es necesario para usar ngModel
  templateUrl: './editar-perfil.html',
  styleUrl: './editar-perfil.css',
})
export class EditarPerfil {
  apodo = 'Manu';
  lenguaje = 'TypeScript';
  color = '#0057b8';
}
