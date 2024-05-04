import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  builder = inject(FormBuilder);
  loginForm!: FormGroup;

  constructor(private router: Router) {
    this.loginForm = this.builder.group({
      usuario: ['', [Validators.required]],
      contrasena: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  validaUsuario() {
    return (
      this.loginForm.get('usuario')?.valid ||
      this.loginForm.get('usuario')?.pristine
    );
  }

  validaContrasena() {
    return (
      this.loginForm.get('contrasena')?.valid ||
      this.loginForm.get('contrasena')?.pristine
    );
  }

  ngOnInit(): void {
    console.log(this.loginForm);
  }

  ejecutar() {
    console.log(this.loginForm);
    this.router.navigate(['/home']);
  }

  limpiar() {}
}
