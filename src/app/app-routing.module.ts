import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegistroUsuariosComponent } from './componentes/usuarios/registro-usuarios/registro-usuarios.component';
import { RegistroBusesComponent } from './componentes/buses/registro-buses/registro-buses.component';
import { RegistroChoferesComponent } from './componentes/choferes/registro-choferes/registro-choferes.component';
import { AsignacionChoferComponent } from './componentes/itinerario/asignacion-chofer/asignacion-chofer.component';
import { RegistroPasajeroComponent } from './componentes/itinerario/registro-pasajero/registro-pasajero.component';
import { NavbarComponent } from './componentes/home/navbar/navbar.component';
import { MenuUsuariosComponent } from './componentes/usuarios/menu-usuarios/menu-usuarios.component';
import { MenuChoferesComponent } from './componentes/choferes/menu-choferes/menu-choferes.component';
import { MenuBusesComponent } from './componentes/buses/menu-buses/menu-buses.component';
import { MenuItinerarioComponent } from './componentes/itinerario/menu-itinerario/menu-itinerario.component';
import { DistribucionAsientosComponent } from './componentes/itinerario/distribucion-asientos/distribucion-asientos.component';
import { FooterComponent } from './componentes/home/footer/footer.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { BienvenidaComponent } from './componentes/home/bienvenida/bienvenida.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrarUsuarios', component: RegistroUsuariosComponent },
  { path: 'registrarBuses', component: RegistroBusesComponent },
  { path: 'registrarChoferes', component: RegistroChoferesComponent },
  { path: 'asignarChoferes', component: AsignacionChoferComponent },
  { path: 'asignarPasajero', component: RegistroPasajeroComponent },

  { path: 'distribucionAsientos', component: DistribucionAsientosComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: BienvenidaComponent },
      { path: 'menuUsuario', component: MenuUsuariosComponent },
      { path: 'menuChoferes', component: MenuChoferesComponent },
      { path: 'menuBuses', component: MenuBusesComponent },
      { path: 'menuItinerario', component: MenuItinerarioComponent },
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
