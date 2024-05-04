import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-buses',
  templateUrl: './registro-buses.component.html',
  styleUrls: ['./registro-buses.component.css'],
})
export class RegistroBusesComponent implements OnInit {
  formBuses!: FormGroup;
  builder = inject(FormBuilder);

  constructor() {
    this.formBuses = this.builder.group({
      Placa: ['', [Validators.required]],
      Modelo: ['', [Validators.required]],
      Marca: ['', [Validators.required]],
      Asientos: ['', [Validators.required, Validators.min(1)]],
    });
  }

  validaPlaca() {
    return (
      this.formBuses.get('Placa')?.valid ||
      this.formBuses.get('Placa')?.pristine
    );
  }

  validaModelo() {
    return (
      this.formBuses.get('Modelo')?.valid ||
      this.formBuses.get('Modelo')?.pristine
    );
  }

  validaMarca() {
    return (
      this.formBuses.get('Marca')?.valid ||
      this.formBuses.get('Marca')?.pristine
    );
  }

  validaAsientos() {
    return (
      this.formBuses.get('Asientos')?.valid ||
      this.formBuses.get('Asientos')?.pristine
    );
  }

  ngOnInit(): void {
    console.log(this.formBuses);
  }

  ejecutar() {}

  limpiar() {}
}
