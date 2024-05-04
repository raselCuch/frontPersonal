import { Component } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-menu-usuarios',
  templateUrl: './menu-usuarios.component.html',
  styleUrls: ['./menu-usuarios.component.css']
})
export class MenuUsuariosComponent {
  arrayUsuarios: IUsuario[] = [
    {
      UsuNombreUsuario: 'Juan Pérez',
      UsuCorreo: 'juanperez@example.com',
      UsuContrasena: '1234',
      UsuRol: 1 // Por ejemplo, 1 podría representar el rol de administrador
    },
    {
      UsuNombreUsuario: 'María García',
      UsuCorreo: 'mariagarcia@example.com',
      UsuContrasena: '4355',
      UsuRol: 2 // Por ejemplo, 2 podría representar el rol de usuario estándar
    },
    {
      UsuNombreUsuario: 'Pedro Rodríguez',
      UsuCorreo: 'pedrorodriguez@example.com',
      UsuContrasena: '4432*',
      UsuRol: 1 // Por ejemplo, 1 podría representar el rol de administrador
    },
    {
      UsuNombreUsuario: 'Ana Martínez',
      UsuCorreo: 'anamartinez@example.com',
      UsuContrasena: '2323',
      UsuRol: 2 // Por ejemplo, 2 podría representar el rol de usuario estándar
    },
  ];
  


  obtenerRol(rol: number): string {
    // Puedes implementar la lógica para obtener el Rol según tus necesidades
    return (rol === 1) ? 'Admin' : 'Usuario Estándar';
  }
}
