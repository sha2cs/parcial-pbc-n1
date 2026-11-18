import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  imports: [FormsModule],
  templateUrl: './editar-perfil.html',
  styleUrl: './editar-perfil.css',
})
export class EditarPerfil {
  apodo = 'Stiv';
  lenguaje = 'Java (más o menos), py, sql';
  color = '#510664';
}
