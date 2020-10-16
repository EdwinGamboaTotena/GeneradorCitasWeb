import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './core/inicio/inicio.component';
import { CitaComponent } from './feature/cita/cita.component';
import { ProductoComponent } from './feature/producto/producto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'citas', component: CitaComponent },
  { path: 'productos', component: ProductoComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
