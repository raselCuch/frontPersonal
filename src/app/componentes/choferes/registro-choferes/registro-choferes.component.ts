import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmpleado } from '../../interfaces/empleado.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-registro-choferes',
  templateUrl: './registro-choferes.component.html',
  styleUrls: ['./registro-choferes.component.css'],
})
export class RegistroChoferesComponent implements OnInit {
  formChoferes!: FormGroup;
  currentEmployee!: IEmpleado;
  builder = inject(FormBuilder);

  mode1 = '';
  id1 = '';

  fNacimiento = new Date(0, 0, 0);

  edad:number = 0;
  antiguedad:number = 0;

  ngOnInit(): void {
    console.log(this.formChoferes);
    this.currentRouter.queryParams
      .pipe(
        switchMap((params) => {
          const id = params['id'];

          this.id1 = id;

          const mode = params['mode'];

          this.mode1 = mode;
          console.log(this.mode1);

          if (!mode) return of(null);
          return this._empleadoService.getEmpleadoById(id);
        })
      )
      .subscribe((data) => {
        if (data) {
          this.setForm(data);
          // console.log(data.EmpFechNacimiento);
          // console.log(this.getEdad(data.EmpFechNacimiento));
          this.edad = this.getEdad(data.EmpFechNacimiento);
          this.antiguedad = this.getEdad(data.EmpFechIngreso);
          console.log(this.edad);
          console.log(this.antiguedad);
        }
      });
      
  }

  constructor(
    private router: Router,
    private _empleadoService: EmpleadoService,
    private currentRouter: ActivatedRoute
  ) {
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

  setForm(data: IEmpleado) {
    this.formChoferes.patchValue({
      EmpDni: data.EmpDni,
      EmpNombre: data.EmpNombre,
      EmpApPaterno: data.EmpApPaterno,
      EmpApMaterno: data.EmpApMaterno,
      EmpGenero: data.EmpGenero,
      EmpArea: data.EmpArea,
      EmpFechNacimiento: this.formatDate(new Date(data.EmpFechNacimiento)),
      EmpFechIngreso: this.formatDate(new Date(data.EmpFechIngreso)),
      ContrModalidad: data.contrato.ContrModalidad,
      ContrFechInicio: this.formatDate(new Date(data.contrato.ContrFechInicio)),
      ContrFechFin: this.formatDate(new Date(data.contrato.ContrFechFin)),
      ContrJornada: data.contrato.ContrJornada,
      ContrSalario: data.contrato.ContrSalario,
    });
    console.log(this.formChoferes.value);
  }

  formatDate(fecha: Date) {
    //formato: "1993-12-05"
    return (
      fecha.getFullYear() +
      '-' +
      ('0' + (fecha.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + fecha.getDate()).slice(-2)
    );
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

  convertFormDataToEmpleado(formChoferes: any): IEmpleado {
    const empleado: IEmpleado = {
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
    if (this.mode1 == undefined) {
      // es nuevo
      this._empleadoService.guardarEmpleado(empleado).subscribe((data) => {
        this.router.navigate(['/home/menuChoferes']);
      });
      console.log(empleado);
      // console.log('eS NUEVO');
      
    }

    if (this.mode1 == 'E') {
      //E
      this._empleadoService
        .editarEmpleado(this.id1, empleado)
        .subscribe((data) => {
          this.router.navigate(['/home/menuChoferes']);
        });
      console.log(empleado);
      console.log(this.formChoferes);
      console.log('sdf',this.formChoferes.valid);
    }

    if (this.mode1 == 'V') {
    }
  }

  limpiar() {
    this.router.navigate(['/home/menuChoferes']);
  }

  modoVer(){
    return this.mode1;
  }

  getEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    const cumpleanos = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const mes = hoy.getMonth() - cumpleanos.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }
    return edad;
  }

}
