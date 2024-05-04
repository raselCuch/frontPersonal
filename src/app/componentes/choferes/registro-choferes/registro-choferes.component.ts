import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-choferes',
  templateUrl: './registro-choferes.component.html',
  styleUrls: ['./registro-choferes.component.css']
})
export class RegistroChoferesComponent implements OnInit {
  formChoferes!: FormGroup;
  builder = inject(FormBuilder);

  constructor() {
    this.formChoferes = this.builder.group({
      DNI: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      Nombres: ['', [Validators.required]],
      FechaIngreso: ['', [Validators.required]],
    });
  }

  validaDNI() {
    return (
      this.formChoferes.get('DNI')?.valid ||
      this.formChoferes.get('DNI')?.pristine
    );
  }

  validaNombres() {
    return (
      this.formChoferes.get('Nombres')?.valid ||
      this.formChoferes.get('Nombres')?.pristine
    );
  }

  validaFechaIngreso() {
    return (
      this.formChoferes.get('FechaIngreso')?.valid ||
      this.formChoferes.get('FechaIngreso')?.pristine
    );
  }

  ngOnInit(): void {
    console.log(this.formChoferes);
  }

  ejecutar() {}

  limpiar() {}
}
