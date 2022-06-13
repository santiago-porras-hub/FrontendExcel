import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './vistas/dashboard-admin/dashboard-admin.component';
import { GraficasComponent } from './vistas/graficas/graficas.component';
import{LoginComponent}from'./vistas/login/login.component';
import { RegisterUserComponent } from './vistas/register-user/register-user.component';
import { TablasComponent } from './vistas/tablas/tablas.component';
import { EliminarComponent } from './vistas/eliminar/eliminar.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { EditUserComponent } from './vistas/edit-user/edit-user.component';

const routes: Routes = [

  {path:'' ,redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard-admin',component:DashboardAdminComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'tablas',component:TablasComponent},
  {path:'graficas',component:GraficasComponent},
  {path:'editar', component:EditarComponent},
  {path:'eliminar', component:EliminarComponent},
  {path:'editarUser/:id',component:EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent]
