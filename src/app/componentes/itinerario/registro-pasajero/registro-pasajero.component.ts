import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-pasajero',
  templateUrl: './registro-pasajero.component.html',
  styleUrls: ['./registro-pasajero.component.css'],
})
export class RegistroPasajeroComponent implements OnInit {
  formRegistroPasajeros!: FormGroup;
  builder = inject(FormBuilder);

  constructor() {
    this.formRegistroPasajeros = this.builder.group({
      DNI: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      Nombres: ['', [Validators.required]],
    });
  }

  validaDNI() {
    return (
      this.formRegistroPasajeros.get('DNI')?.valid ||
      this.formRegistroPasajeros.get('DNI')?.pristine
    );
  }

  validaNombres() {
    return (
      this.formRegistroPasajeros.get('Nombres')?.valid ||
      this.formRegistroPasajeros.get('Nombres')?.pristine
    );
  }

  ngOnInit(): void {
    console.log(this.formRegistroPasajeros);
  }

  ejecutar() {}

  limpiar() {}
}
