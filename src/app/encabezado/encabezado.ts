import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css',
})
export class Encabezado {
  nombre = 'Robert Steven Castillo Pérez';
  carrera = 'Ingeniería informática';
  semestre = 5;
  ciudad = 'Barrancabermeja, Santander';
}
