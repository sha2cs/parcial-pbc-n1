import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css',
})
export class Encabezado {
  nombre = 'camilo andres gaviria';
  carrera = 'Ingeniería informatica';
  semestre = 5;
  ciudad = 'Barrancabermeja';
}