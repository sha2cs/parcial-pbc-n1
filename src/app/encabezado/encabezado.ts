import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css',
})
export class Encabezado {
  nombre = 'Juan Sebastian Rodriguez Rincon';
  carrera = 'Ingeniería Informática';
  semestre = 5;
  ciudad = 'Barrancabermeja';
}
