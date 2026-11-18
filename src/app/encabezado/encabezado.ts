import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css',
})
export class Encabezado {
  nombre = 'Luis Eduardo Balaguera Vázquez';
  carrera = 'Ingeniería Informática';
  semestre = 5;
  ciudad = 'Barrancabermeja';
}