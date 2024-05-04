import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegistroUsuariosComponent } from './componentes/usuarios/registro-usuarios/registro-usuarios.component';
import { RegistroBusesComponent } from './componentes/buses/registro-buses/registro-buses.component';
import { RegistroChoferesComponent } from './componentes/choferes/registro-choferes/registro-choferes.component';
import { NavbarComponent } from './componentes/home/navbar/navbar.component';
import { MenuUsuariosComponent } from './componentes/usuarios/menu-usuarios/menu-usuarios.component';
import { MenuChoferesComponent } from './componentes/choferes/menu-choferes/menu-choferes.component';
import { MenuBusesComponent } from './componentes/buses/menu-buses/menu-buses.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { BienvenidaComponent } from './componentes/home/bienvenida/bienvenida.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrarUsuarios', component: RegistroUsuariosComponent },
  { path: 'registrarBuses', component: RegistroBusesComponent },
  { path: 'registrarChoferes', component: RegistroChoferesComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: BienvenidaComponent },
      { path: 'menuUsuario', component: MenuUsuariosComponent },
      { path: 'menuChoferes', component: MenuChoferesComponent },
      { path: 'menuBuses', component: MenuBusesComponent },
    ],
  },
  // { path: '**', redirectTo: 'registrarChoferes' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
