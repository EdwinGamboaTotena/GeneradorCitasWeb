import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './core/inicio/inicio.component';
import { AgregarCitaComponent } from './feature/cita/agregar-cita/agregar-cita.component';
import { CitaComponent } from './feature/cita/cita.component';
import { AgregarProductoComponent } from './feature/producto/agregar-producto/agregar-producto.component';
import { ProductoComponent } from './feature/producto/producto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'citas', component: CitaComponent },
  { path: 'citas/agregar', component: AgregarCitaComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'productos/agregar', component: AgregarProductoComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
