import { Component, OnInit } from '@angular/core';
import { IEmpleado } from '../../interfaces/empleado.interface';
import { DatePipe } from '@angular/common';
import { EmpleadoService } from '../../services/empleado.service';


@Component({
  selector: 'app-menu-choferes',
  templateUrl: './menu-choferes.component.html',
  styleUrls: ['./menu-choferes.component.css'],
})
export class MenuChoferesComponent implements OnInit {
  arrayEmpleados: IEmpleado[] = [];
  constructor(private _empleadoService: EmpleadoService,
    
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
}
