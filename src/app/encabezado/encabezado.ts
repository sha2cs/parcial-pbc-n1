import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css',
})
export class Encabezado {
  nombre = 'Emeling Martinez Tirado';
  carrera = 'Ingeniería Informatica';
  semestre = 5;
  ciudad = 'Barrancabermeja';
}
