import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-choferes',
  templateUrl: './registro-choferes.component.html',
  styleUrls: ['./registro-choferes.component.css'],
})
export class RegistroChoferesComponent implements OnInit {
  formChoferes!: FormGroup;
  builder = inject(FormBuilder);

  constructor() {
    this.formChoferes = this.builder.group({
      EmpDni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      EmpNombre: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      EmpApPaterno: ['',[Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      EmpApMaterno: ['',[Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      EmpGenero: ['', [Validators.required]],
      EmpArea: ['', [Validators.required]],
      EmpFechNacimiento: ['', [Validators.required]],
      EmpFechIngreso: ['', [Validators.required]],
      
      ContrModalidad: ['', [Validators.required]],
      ContrFechInicio: ['', [Validators.required]],
      ContrFechFin: ['', [Validators.required]],
      ContrJornada: ['', [Validators.required]],
      ContrSalario: ['', [Validators.required, Validators.min(0)]]
    });
  }

  get form() {
    return this.formChoferes.controls;
  }

  validaCampo(campo: string) {
    return this.form[campo].valid || this.form[campo].pristine;
  }

  ngOnInit(): void {
    this.formChoferes = this.convertFormDataToObject(this.formChoferes.value);
    console.log(this.formChoferes);
  }

  convertFormDataToObject(formData: any): any {
    return {
      dni: formData.EmpDni,
      nombre: formData.EmpNombre,
      apPaterno: formData.EmpApPaterno,
      apMaterno: formData.EmpApMaterno,
      genero: formData.EmpGenero,
      area: formData.EmpArea,
      fechaNacimiento: formData.EmpFechNacimiento,
      fechaIngreso: formData.EmpFechIngreso,
      contrato: {
        modalidad: formData.ContrModalidad,
        fechaInicio: formData.ContrFechInicio,
        fechaFin: formData.ContrFechFin,
        jornada: formData.ContrJornada,
        salario: formData.ContrSalario,
      },
    };
  }

  ejecutar() {
    console.log(this.formChoferes);
  }

  limpiar() {}
}
