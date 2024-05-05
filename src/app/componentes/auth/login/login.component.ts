import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  builder = inject(FormBuilder);
  loginForm!: FormGroup;

  constructor(private router: Router, private _usuarioService: UsuarioService) {
    this.loginForm = this.builder.group({
      UsuCorreo: ['', [Validators.required, Validators.email]],
      UsuContrasena: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  validaCorreo() {
    return (
      this.loginForm.get('UsuCorreo')?.valid ||
      this.loginForm.get('UsuCorreo')?.pristine
    );
  }

  validaContrasena() {
    return (
      this.loginForm.get('UsuContrasena')?.valid ||
      this.loginForm.get('UsuContrasena')?.pristine
    );
  }

  ngOnInit(): void {
    console.log(this.loginForm);
  }

  isAdmin: boolean = false;

  ejecutar() {
    const correo = this.loginForm.get('UsuCorreo')?.value;
    const contrasena = this.loginForm.get('UsuContrasena')?.value;

    this._usuarioService.iniciarSesion(correo, contrasena).subscribe(
      (data) => {
        console.log(data);
        this.isAdmin = !!data.isAdmin;
        this._usuarioService.setIsAdmin(this.isAdmin);
        
        this.router.navigate(['/home'], {
          queryParams: { isAdmin: this.isAdmin },
        });

        console.log(this.isAdmin);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.loginForm);
  }

  limpiar() {}
}
