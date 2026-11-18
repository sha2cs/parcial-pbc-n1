import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  imports: [FormsModule],
  templateUrl: './editar-perfil.html',
  styleUrl: './editar-perfil.css',
})
export class EditarPerfil {
  apodo = 'el negro(en contra de mi voluntad)';
  lenguaje = 'el que page mejor';
  color = '#b91c1c';
}
