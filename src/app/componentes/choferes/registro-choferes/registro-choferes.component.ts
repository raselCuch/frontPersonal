import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmpleado } from '../../interfaces/empleado.interface';

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
      EmpNombre: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      ],
      EmpApPaterno: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z]*$')],
      ],
      EmpApMaterno: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z]*$')],
      ],
      EmpGenero: ['', [Validators.required]],
      EmpArea: ['', [Validators.required]],
      EmpFechNacimiento: ['', [Validators.required]],
      EmpFechIngreso: ['', [Validators.required]],

      ContrModalidad: ['', [Validators.required]],
      ContrFechInicio: ['', [Validators.required]],
      ContrFechFin: ['', [Validators.required]],
      ContrJornada: ['', [Validators.required]],
      ContrSalario: ['', [Validators.required, Validators.min(0)]],
    });
  }

  validaDni() {
    return (
      this.formChoferes.get('EmpDni')?.valid ||
      this.formChoferes.get('EmpDni')?.pristine
    );
  }

  validaNombre() {
    return (
      this.formChoferes.get('EmpNombre')?.valid ||
      this.formChoferes.get('EmpNombre')?.pristine
    );
  }

  validaApPaterno() {
    return (
      this.formChoferes.get('EmpApPaterno')?.valid ||
      this.formChoferes.get('EmpApPaterno')?.pristine
    );
  }

  validaApMaterno() {
    return (
      this.formChoferes.get('EmpApMaterno')?.valid ||
      this.formChoferes.get('EmpApMaterno')?.pristine
    );
  }

  validaGenero() {
    return (
      this.formChoferes.get('EmpGenero')?.valid ||
      this.formChoferes.get('EmpGenero')?.pristine
    );
  }

  validaArea() {
    return (
      this.formChoferes.get('EmpArea')?.valid ||
      this.formChoferes.get('EmpArea')?.pristine
    );
  }

  validaFechaNacimiento() {
    return (
      this.formChoferes.get('EmpFechNacimiento')?.valid ||
      this.formChoferes.get('EmpFechNacimiento')?.pristine
    );
  }

  validaFechaIngreso() {
    return (
      this.formChoferes.get('EmpFechIngreso')?.valid ||
      this.formChoferes.get('EmpFechIngreso')?.pristine
    );
  }

  validaModalidad() {
    return (
      this.formChoferes.get('ContrModalidad')?.valid ||
      this.formChoferes.get('ContrModalidad')?.pristine
    );
  }

  validaFechaInicio() {
    return (
      this.formChoferes.get('ContrFechInicio')?.valid ||
      this.formChoferes.get('ContrFechInicio')?.pristine
    );
  }

  validaFechaFin() {
    return (
      this.formChoferes.get('ContrFechFin')?.valid ||
      this.formChoferes.get('ContrFechFin')?.pristine
    );
  }

  validaJornada() {
    return (
      this.formChoferes.get('ContrJornada')?.valid ||
      this.formChoferes.get('ContrJornada')?.pristine
    );
  }

  validaSalario() {
    return (
      this.formChoferes.get('ContrSalario')?.valid ||
      this.formChoferes.get('ContrSalario')?.pristine
    );
  }

  ngOnInit(): void {
    console.log(this.formChoferes);
  }

  convertFormDataToEmpleado(formChoferes: any): IEmpleado {
    const empleado: IEmpleado = {
      _id: '', // Puedes generar un id aquí si es necesario
      EmpDni: formChoferes.EmpDni,
      EmpNombre: formChoferes.EmpNombre,
      EmpApPaterno: formChoferes.EmpApPaterno,
      EmpApMaterno: formChoferes.EmpApMaterno,
      EmpGenero: formChoferes.EmpGenero,
      EmpArea: formChoferes.EmpArea,
      EmpFechNacimiento: formChoferes.EmpFechNacimiento,
      EmpFechIngreso: formChoferes.EmpFechIngreso,

      contrato: {
        ContrModalidad: formChoferes.ContrModalidad,
        ContrFechInicio: formChoferes.ContrFechInicio,
        ContrFechFin: formChoferes.ContrFechFin,
        ContrJornada: formChoferes.ContrJornada,
        ContrSalario: formChoferes.ContrSalario,
      },
    };
    return empleado;
  }

  ejecutar() {
    const empleado: IEmpleado = this.convertFormDataToEmpleado(
      this.formChoferes.value
    );
    console.log(empleado);
  }

  limpiar() {}
}
