import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
})
export class RegistroUsuariosComponent implements OnInit {
  formUsuarios!: FormGroup;
  builder = inject(FormBuilder);

  constructor(private router: Router, private _productoService: UsuarioService) {
    this.formUsuarios = this.builder.group({
      UsuNombreUsuario: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      ],
      UsuCorreo: ['', [Validators.required, Validators.email]],
      UsuContrasena: ['', [Validators.required, Validators.minLength(4)]],
      UsuRol: ['Usuario', [Validators.required]],
    });
  }

  validaNombres() {
    return (
      this.formUsuarios.get('UsuNombreUsuario')?.valid ||
      this.formUsuarios.get('UsuNombreUsuario')?.pristine
    );
  }

  validaCorreo() {
    return (
      this.formUsuarios.get('UsuCorreo')?.valid ||
      this.formUsuarios.get('UsuCorreo')?.pristine
    );
  }

  validaContrasena() {
    return (
      this.formUsuarios.get('UsuContrasena')?.valid ||
      this.formUsuarios.get('UsuContrasena')?.pristine
    );
  }

  validaRol() {
    return (
      this.formUsuarios.get('UsuRol')?.valid ||
      this.formUsuarios.get('UsuRol')?.pristine
    );
  }

  ngOnInit(): void {
    console.log(this.formUsuarios);
  }

  ejecutar() {
    const usuario = this.formUsuarios.value; //captura datos

    this._productoService.guardarUsuario(usuario).subscribe((data) => {
      this.router.navigate(['/home/menuUsuario']);
    });

    console.log(this.formUsuarios);
  }

  limpiar() {}
}
