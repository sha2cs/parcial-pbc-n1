import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css',
})
export class Encabezado {
  nombre = 'Jose Luis Passo Guerra';
  carrera = 'Ingeniería Informática';
  semestre = 5;
  ciudad = 'Barrancabermeja';
}
