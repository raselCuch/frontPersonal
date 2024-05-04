import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';

import { LoginComponent } from './componentes/auth/login/login.component';
import { RegistroUsuariosComponent } from './componentes/usuarios/registro-usuarios/registro-usuarios.component';
import { RegistroChoferesComponent } from './componentes/choferes/registro-choferes/registro-choferes.component';
import { NavbarComponent } from './componentes/home/navbar/navbar.component';
import { MenuUsuariosComponent } from './componentes/usuarios/menu-usuarios/menu-usuarios.component';
import { MenuChoferesComponent } from './componentes/choferes/menu-choferes/menu-choferes.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { BienvenidaComponent } from './componentes/home/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroUsuariosComponent,
    RegistroChoferesComponent,
    NavbarComponent,
    MenuUsuariosComponent,
    MenuChoferesComponent,
    HomeComponent,
    BienvenidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
