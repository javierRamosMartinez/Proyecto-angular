import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { FormComponent } from './pages/form/form.component';
import { EmpleadoViewComponent } from './components/empleado-view/empleado-view.component';
import { LoginComponent } from './pages/login/login.component';
import { loginloginGuard } from './guards/loginlogin.guard';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: LoginComponent },
  { path: 'empleados', component: ListaEmpleadosComponent, canActivate: [loginloginGuard] },
  { path: 'nuevo-empleado', component: FormComponent, canActivate: [loginloginGuard] },
  { path: 'empleados/:idempleado', component: EmpleadoViewComponent, canActivate: [loginloginGuard] },
  { path: 'actualizar-empleado/:idempleado', component: FormComponent, canActivate: [loginloginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
