import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
})
export class RegistroUsuariosComponent implements OnInit {
  formUsuarios!: FormGroup;
  builder = inject(FormBuilder);

  constructor() {
    this.formUsuarios = this.builder.group({
      DNI: ['', [Validators.required , Validators.pattern('^[0-9]{8}$')]],
      Nombres: ['', [Validators.required]],
      Usuario: ['', [Validators.required]],
      Contrasena: ['', [Validators.required, Validators.minLength(4)]],
      Rol: ['', [Validators.required]],
    });
  }

  validaDNI() {
    return (
      this.formUsuarios.get('DNI')?.valid ||
      this.formUsuarios.get('DNI')?.pristine
    );
  }

  validaNombres() {
    return (
      this.formUsuarios.get('Nombres')?.valid ||
      this.formUsuarios.get('Nombres')?.pristine
    );
  }

  validaUsuario() {
    return (
      this.formUsuarios.get('Usuario')?.valid ||
      this.formUsuarios.get('Usuario')?.pristine
    );
  }

  validaContrasena() {
    return (
      this.formUsuarios.get('Contrasena')?.valid ||
      this.formUsuarios.get('Contrasena')?.pristine
    );
  }

  validaRol() {
    return (
      this.formUsuarios.get('Rol')?.valid ||
      this.formUsuarios.get('Rol')?.pristine
    );
  }

  ngOnInit(): void {
    console.log(this.formUsuarios);
  }

  ejecutar() {}

  limpiar() {}


}
