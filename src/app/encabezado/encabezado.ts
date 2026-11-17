import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css',
})
export class Encabezado {
  nombre = 'Jesús Alberto Turizo Hernández';
  carrera = 'Ingeniería Informática';
  semestre = 5;
  ciudad = 'Barrancabermeja';
}
