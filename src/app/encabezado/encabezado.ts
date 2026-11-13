import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css',
})
export class Encabezado {
  // Estos datos se muestran en el HTML con interpolación {{ }}
  nombre = 'Carlos Manuel Turizo Hernández';
  carrera = 'Ingeniería Informática';
  semestre = 6;
  ciudad = 'Barrancabermeja';
}
