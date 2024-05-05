import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegistroUsuariosComponent } from './componentes/usuarios/registro-usuarios/registro-usuarios.component';
import { RegistroChoferesComponent } from './componentes/choferes/registro-choferes/registro-choferes.component';
import { MenuUsuariosComponent } from './componentes/usuarios/menu-usuarios/menu-usuarios.component';
import { MenuChoferesComponent } from './componentes/choferes/menu-choferes/menu-choferes.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { BienvenidaComponent } from './componentes/home/bienvenida/bienvenida.component';
import { ExcelComponent } from './componentes/choferes/excel/excel.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrarUsuarios', component: RegistroUsuariosComponent },
  { path: 'registrarChoferes', component: RegistroChoferesComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: BienvenidaComponent },
      { path: 'menuUsuario', component: MenuUsuariosComponent },
      { path: 'menuChoferes', component: MenuChoferesComponent },
      { path: 'excel', component: ExcelComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
