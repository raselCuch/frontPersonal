import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-menu-usuarios',
  templateUrl: './menu-usuarios.component.html',
  styleUrls: ['./menu-usuarios.component.css'],
})
export class MenuUsuariosComponent implements OnInit {
  arrayUsuarios: IUsuario[] = [];

  constructor(private _usuarioService: UsuarioService) {}

  obtenerRol(rol: number): string {
    // Puedes implementar la lógica para obtener el Rol según tus necesidades
    return rol === 1 ? 'Admin' : 'Usuario Estándar';
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._usuarioService.getUsuarios().subscribe(
      (data) => {
        console.log(data);
        this.arrayUsuarios = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  confirmarEliminarProducto(id: any) {
    // Mostrar el cuadro de diálogo de confirmación
    const confirmarEliminar = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
    
    if (confirmarEliminar) {
      // Llamar al método para eliminar el producto
      this.eliminarProducto(id);
    }
  }

  eliminarProducto(id: any) {
    this._usuarioService.eliminarUsuario(id).subscribe(
      (data) => {
        this.obtenerProductos();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
