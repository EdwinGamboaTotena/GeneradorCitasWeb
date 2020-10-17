import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/shared/models/producto';
import { ErroresService } from 'src/app/shared/services/errores.service';
import { SwalService } from 'src/app/shared/services/swal.service';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  formularioProducto: FormGroup;

  constructor(
    private productoService: ProductoService,
    private sweetService: SwalService,
    private zone: NgZone,
    private router: Router,
    public erroresService: ErroresService
  ) { }

  ngOnInit(): void {
    this.formularioProducto = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      precio: new FormControl('0', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')]),
      generaCupo: new FormControl(false, Validators.required),
      porcetajeCuponGenerar: new FormControl('0', [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]+$')]),
    });
  }

  guardar(): void {
    if (this.formularioProducto.valid) {
      this.productoService.almacenarProducto(this.formularioProducto.value).subscribe(
        (data: Producto) => {
          this.sweetService.popUp('Éxito', 'El producto se a almacenado satisfactoriamente', 'success');
          this.volver();
        },
        (error) => {
          this.sweetService.popUp('Error', 'Ya existe un producto con este nombre.', 'error');
        }
      );
    } else {
      this.sweetService.popUp('Alerta', 'Datos inválidos, por favor intente nuevamente', 'warning');
    }
  }

  volver(): void {
    this.zone.run(() => {
      this.router.navigate(['/productos']);
    });
  }

}
