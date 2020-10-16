import { NgModule } from '@angular/core';
import { CitaComponent } from './cita/cita.component';
import { ProductoComponent } from './producto/producto.component';
import { ListarCitasComponent } from './cita/listar-citas/listar-citas.component';
import { SharedModule } from '../shared/shared.module';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';



@NgModule({
  declarations: [CitaComponent, ProductoComponent, ListarCitasComponent, ListarProductoComponent],
  imports: [
    SharedModule
  ]
})
export class FeatureModule { }
