import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  nombre = '';
  correo = '';
  mensaje = '';
  enviado = false;
  nombreEnviado = '';

  enviar(formulario: NgForm) {
    // Guardo el nombre antes de limpiar el formulario
    this.nombreEnviado = this.nombre;
    this.enviado = true;
    formulario.resetForm();
  }
}
