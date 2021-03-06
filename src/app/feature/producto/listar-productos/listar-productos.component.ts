import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto';
import { SwalService } from 'src/app/shared/services/swal.service';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html'
})
export class ListarProductoComponent implements OnInit {

  listaProductos: Producto[];

  constructor(
    private productoService: ProductoService,
    private sweetService: SwalService
  ) { }

  ngOnInit(): void {
    this.productoService.listarProductos().subscribe(
      (data: Producto[]) => this.listaProductos = data,
      (error) => this.sweetService.popUp('Error', error.error.mensaje, 'error')
    );
  }

  mostrarTabla(): boolean {
    return (this.listaProductos === null && this.listaProductos.length === 0);
  }

}
