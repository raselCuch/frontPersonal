import { Component, OnInit } from '@angular/core';
import { IEmpleado } from '../../interfaces/empleado.interface';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-menu-choferes',
  templateUrl: './menu-choferes.component.html',
  styleUrls: ['./menu-choferes.component.css'],
})
export class MenuChoferesComponent implements OnInit {
  arrayEmpleados: IEmpleado[] = [];

  constructor(
    private _empleadoService: EmpleadoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.isAdmin = this._usuarioService.getIsAdmin();
    this.obtenerEmpleado();
    // console.log(this.isAdmin);
  }

  obtenerEmpleado() {
    this._empleadoService.getEmpleados().subscribe(
      (data) => {
        console.log(data);
        this.arrayEmpleados = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  confirmarEliminarEmpleado(id: any) {
    // Mostrar el cuadro de diálogo de confirmación
    const confirmarEliminar = window.confirm(
      '¿Estás seguro de que deseas eliminar este empleado?'
    );

    if (confirmarEliminar) {
      // Llamar al método para eliminar el producto
      this.eliminarProducto(id);
    }
  }

  eliminarProducto(id: any) {
    this._empleadoService.eliminarEmpleado(id).subscribe(
      (data) => {
        this.obtenerEmpleado();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // private fechaInicio: Date = new Date(0, 0, 0);
  // private fechaFin: Date = new Date(0, 0, 0);
  // private salarioMensual: number = 0;


  excel(fechaInicio: Date,
    fechaFin: Date,
    salarioMensual: number) {

    this._empleadoService.setPlazoSalario(
      fechaInicio,
      fechaFin,
      salarioMensual
    );
    console.log(fechaInicio,
      fechaFin,
      salarioMensual);
    
    this.router.navigate(['/home/excel']);
  }
}
