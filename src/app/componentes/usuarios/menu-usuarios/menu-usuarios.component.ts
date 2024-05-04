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
      DNI: '45896588',
      nombre: 'Juan Pérez',
      correo: 'juanperez@example.com',
      username: 'juanperez123',
      password: '********',
      rol: 1 // Por ejemplo, 1 podría representar el rol de administrador
    },
    {
      DNI: '45822256',
      nombre: 'María Rodríguez',
      correo: 'mariarodriguez@example.com',
      username: 'mariarodriguez456',
      password: '********',
      rol: 2 // Por ejemplo, 2 podría representar el rol de usuario estándar
    },
    // Agrega más usuarios según sea necesario
    {
      DNI: '12345678',
      nombre: 'Carlos González',
      correo: 'carlosgonzalez@example.com',
      username: 'carlosgonzalez789',
      password: '********',
      rol: 1 // Por ejemplo, 1 podría representar el rol de administrador
    },
    {
      DNI: '78901234',
      nombre: 'Ana Silva',
      correo: 'anasilva@example.com',
      username: 'anasilva567',
      password: '********',
      rol: 2 // Por ejemplo, 2 podría representar el rol de usuario estándar
    },
    // Agrega más usuarios según sea necesario
  ];


  obtenerRol(rol: number): string {
    // Puedes implementar la lógica para obtener el Rol según tus necesidades
    return (rol === 1) ? 'Admin' : 'Usuario Estándar';
  }
}
