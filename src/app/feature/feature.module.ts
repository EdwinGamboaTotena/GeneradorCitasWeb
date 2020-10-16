import { NgModule } from '@angular/core';
import { CitaComponent } from './cita/cita.component';
import { ProductoComponent } from './producto/producto.component';
import { ListarCitasComponent } from './cita/listar-citas/listar-citas.component';
import { SharedModule } from '../shared/shared.module';
import { ListarProductoComponent } from './producto/listar-productos/listar-productos.component';
import { AgregarProductoComponent } from './producto/agregar-producto/agregar-producto.component';
import { AgregarCitaComponent } from './cita/agregar-cita/agregar-cita.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CitaComponent,
    ProductoComponent,
    ListarCitasComponent,
    ListarProductoComponent,
    AgregarProductoComponent,
    AgregarCitaComponent],
  imports: [
    SharedModule,
    NgbModule
  ]
})
export class FeatureModule { }
