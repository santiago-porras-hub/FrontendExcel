import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { DashboardAdminComponent } from './vistas/dashboard-admin/dashboard-admin.component';
import { RegisterUserComponent } from './vistas/register-user/register-user.component';
import { TablasComponent } from './vistas/tablas/tablas.component';
import { GraficasComponent } from './vistas/graficas/graficas.component';
import {ReactiveFormsModule,FormsModule} from'@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditarComponent } from './vistas/editar/editar.component';
import { EliminarComponent } from './vistas/eliminar/eliminar.component';
import { EditUserComponent } from './vistas/edit-user/edit-user.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponent,
    DashboardAdminComponent,
    RegisterUserComponent,
    TablasComponent,
    GraficasComponent,
    EditarComponent,
    EliminarComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
