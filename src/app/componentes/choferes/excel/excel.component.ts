import { Component } from '@angular/core';
import { IPagoMes } from '../../interfaces/pagoMes.interface';
import * as XLSX from 'xlsx';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css'],
})
export class ExcelComponent {
  arraySalario: IPagoMes[] = [];

  totalSalario: number = 0;
  totalGratificacion: number = 0;
  totalFinal: number = 0;

  constructor(private _empleadoService: EmpleadoService) {
    const fechaInicio = new Date(this._empleadoService.getPlazoSalario(1));
    const fechaFin = new Date(this._empleadoService.getPlazoSalario(2));
    const salarioMensual = this._empleadoService.getPlazoSalario(3);

    console.log(fechaInicio, fechaFin, salarioMensual);
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

    for (
      let fecha = new Date(fechaInicio);
      fecha <= fechaFin;
      fecha.setMonth(fecha.getMonth() + 1)
    ) {
      const mes = nombresMeses[fecha.getMonth()];
      let gatificacion = 0;
      if (mes === 'Julio' || mes === 'Diciembre') {
        gatificacion = 300;
      }
      const salarioMes: IPagoMes = {
        mes: mes,
        salario: salarioMensual,
        gratificacion: gatificacion,
      };
      this.arraySalario.push(salarioMes);
      this.totalSalario += salarioMensual;
      this.totalGratificacion += gatificacion;
    }
    this.totalFinal = this.totalSalario + this.totalGratificacion;
  }

  fileName = 'ExcelSheet.xlsx';

  exportExcel() {
    let data = document.getElementById('table-data');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }
}
