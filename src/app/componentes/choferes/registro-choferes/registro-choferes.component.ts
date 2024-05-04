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
      EmpDni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      EmpNombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      EmpApPaterno: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      EmpApMaterno: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      EmpGenero: ['', [Validators.required]],

      EmpArea: ['', [Validators.required]],
      EmpFechNacimiento: ['', [Validators.required]],
      EmpFechIngreso: ['', [Validators.required]],

      contrato: this.builder.group({
        ContrModalidad: ['', [Validators.required]],
        ContrFechInicio: ['', [Validators.required]],
        ContrFechFin: ['', [Validators.required]],
        ContrJornada: ['', [Validators.required]],
        ContrSalario: ['', [Validators.required, Validators.min(0)]]
      })
    });
  }

  get form() {
    return this.formChoferes.controls;
  }

  validaCampo(campo: string) {
    return (
      this.form[campo].valid ||
      this.form[campo].pristine
    );
  }

  ngOnInit(): void {
    console.log(this.formChoferes);
  }

  ejecutar() {
    console.log('ale ale ale');
    
  }

  limpiar() {}
}
