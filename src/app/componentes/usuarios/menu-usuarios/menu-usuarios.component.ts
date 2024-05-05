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
  isAdmin: boolean = false;

  constructor(private _usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.isAdmin = this._usuarioService.getIsAdmin();
    this.obtenerProductos();
    console.log(this.isAdmin);
  }
  
  esAdmin(){
    return this.isAdmin;
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
