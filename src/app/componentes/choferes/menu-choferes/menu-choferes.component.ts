import { Component } from '@angular/core';
import { IEmpleado } from '../../interfaces/empleado.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-menu-choferes',
  templateUrl: './menu-choferes.component.html',
  styleUrls: ['./menu-choferes.component.css'],
})
export class MenuChoferesComponent {
  arrayEmpleados: IEmpleado[] = [
    {
      _id: '1',
      EmpDni: '12345678',
      EmpNombre: 'Juan',
      EmpApPaterno: 'Pérez',
      EmpApMaterno: 'González',
      EmpGenero: 'Masculino',
      EmpArea: 'Ventas',
      EmpFechNacimiento: new Date('1980-05-25'),
      EmpFechIngreso: new Date('2020-02-15'),
      contrato: {
        ContrModalidad: 'Tiempo completo',
        ContrFechInicio: new Date('2020-02-15'),
        ContrFechFin: new Date('2022-02-15'),
        ContrJornada: '8 horas diarias',
        ContrSalario: 2500,
      },
    },
    {
      _id: '2',
      EmpDni: '98765432',
      EmpNombre: 'María',
      EmpApPaterno: 'López',
      EmpApMaterno: 'García',
      EmpGenero: 'Femenino',
      EmpArea: 'Recursos Humanos',
      EmpFechNacimiento: new Date('1990-10-15'),
      EmpFechIngreso: new Date('2018-06-30'),
      contrato: {
        ContrModalidad: 'Medio tiempo',
        ContrFechInicio: new Date('2018-06-30'),
        ContrFechFin: new Date('2021-06-30'),
        ContrJornada: '4 horas diarias',
        ContrSalario: 1800,
      },
    },
    {
      _id: '3',
      EmpDni: '54321678',
      EmpNombre: 'Pedro',
      EmpApPaterno: 'Gómez',
      EmpApMaterno: 'Martínez',
      EmpGenero: 'Masculino',
      EmpArea: 'Producción',
      EmpFechNacimiento: new Date('1975-03-12'),
      EmpFechIngreso: new Date('2015-08-20'),
      contrato: {
        ContrModalidad: 'Tiempo completo',
        ContrFechInicio: new Date('2015-08-20'),
        ContrFechFin: new Date('2025-08-20'),
        ContrJornada: '8 horas diarias',
        ContrSalario: 2800,
      },
    },
  ];
}
