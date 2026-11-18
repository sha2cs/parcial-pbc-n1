import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css',
})
export class Encabezado {
  nombre = 'Samuel';
  carrera = 'Ingeniería Informatica';
  semestre = 5;
  ciudad = 'Barrancabermeja';
}
