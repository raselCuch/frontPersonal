import { Component } from '@angular/core';
import { IPagoMes } from '../../interfaces/pagoMes.interface';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css'],
})
export class ExcelComponent {
  arraySalario: IPagoMes[] = [];

  constructor() {
    const fechaInicio = new Date(2024, 0, 1); // 1 de enero de 2024
    const fechaFin = new Date(2025, 11, 31); // 31 de diciembre de 2024
    const salarioMensual = 3000; // Salario mensual del empleado

    this.calcularSalarios(fechaInicio, fechaFin, salarioMensual);
  }

  calcularSalarios(fechaInicio: Date, fechaFin: Date, salarioMensual: number) {
    const nombresMeses = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];

    for (let fecha = new Date(fechaInicio); fecha <= fechaFin; fecha.setMonth(fecha.getMonth() + 1)) {
      const mes = nombresMeses[fecha.getMonth()];
      let gatificacion = 0;
      if (mes === "Julio" || mes === "Diciembre") {
        gatificacion = 300;
      }
      const salarioMes: IPagoMes = {
        mes: mes,
        salario: salarioMensual,
        gratificacion: gatificacion
      };
      this.arraySalario.push(salarioMes);
    }
  }

}
