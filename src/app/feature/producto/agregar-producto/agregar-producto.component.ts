import { Component, OnInit } from '@angular/core';
import { SwalService } from 'src/app/shared/services/swal.service';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  constructor(
    private productoService: ProductoService,
    private sweetService: SwalService
  ) { }

  ngOnInit(): void {
  }

}
