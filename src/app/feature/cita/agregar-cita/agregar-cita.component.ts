import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from 'src/app/shared/models/producto';
import { ErroresService } from 'src/app/shared/services/errores.service';
import { SwalService } from 'src/app/shared/services/swal.service';
import { Cupon } from '../../cupon/cupon';
import { CuponService } from '../../cupon/cupon.services';
import { ProductoService } from '../../producto/producto.service';
import { Cita } from '../cita';
import { CitaService } from '../cita.services';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html'
})
export class AgregarCitaComponent implements OnInit {

  fechaMinimaParaSolicitar: { year: number, month: number, day: number };
  fechasDeshabilitadas = false;
  markDisabled;

  listaProductos: Producto[];
  cuponSeleccionado: Cupon;
  formularioCita: FormGroup;

  constructor(
    private calendar: NgbCalendar,
    private citaService: CitaService,
    private productoService: ProductoService,
    private cuponService: CuponService,
    private sweetService: SwalService,
    private zone: NgZone,
    private router: Router,
    public erroresService: ErroresService,
  ) {
    const hoy = new Date();
    this.fechaMinimaParaSolicitar = this.dateToPicker(hoy);
    this.fechaMinimaParaSolicitar.day += 1;
    this.diasNoHabiles();
    this.cargarProducos();
  }

  ngOnInit(): void {
    this.formularioCita = new FormGroup({
      fechaSolicitud: new FormControl('', Validators.required),
      productoSolicitado: new FormControl('', Validators.required),
      cuponUsado: new FormControl(null),
      cedulaCliente: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  diasNoHabiles(): void {
    if (this.fechasDeshabilitadas) {
      this.fechasDeshabilitadas = false;
      this.markDisabled = (date: NgbDate) => false;
    } else {
      this.fechasDeshabilitadas = true;
      this.markDisabled = (date: NgbDate) => this.calendar.getWeekday(date) === 7;
    }
  }

  cargarProducos(): void {
    this.productoService.listarProductos().subscribe(
      (data: Producto[]) => this.listaProductos = data,
      (error) => {
        this.sweetService.popUp('Error', error.error.mensaje, 'error');
        this.sweetService.popUp('Lo sentimos',
          'Dado que no podemos encontrar productos para realizar citas sera redireccionado a la lista de Citas actuales',
          'info');
        this.volver();
      }
    );
  }

  consultarCupon(): void {
    const id: number = this.formularioCita.controls.cuponUsado.value;
    if (id != null && id > 0) {
      this.cuponService.consultarCuponId(this.formularioCita.controls.cuponUsado.value).subscribe(
        (data: Cupon) => {
          if (data.usado) {
            this.sweetService.popUp('Cupon invalido', 'Este cupon ya ha sido usado anteriormente, asi que no es valido', 'warning');
            this.cuponSeleccionado = null;
            this.formularioCita.controls.cuponUsado.setValue(this.cuponSeleccionado);
          } else {
            this.cuponSeleccionado = data;
          }
        },
        (error) => {
          this.formularioCita.controls.cuponUsado.setValue(null);
          this.sweetService.popUp('Codigo no valido', error.error.mensaje, 'error');
        }
      );
    } else {
      this.cuponSeleccionado = null;
      this.formularioCita.controls.cuponUsado.setValue(this.cuponSeleccionado);
    }
  }

  precioProductoSeleccionado(): number {
    return (this.formularioCita.controls.productoSolicitado.value) ?
      this.formularioCita.controls.productoSolicitado.value.precio : 0;
  }

  descuentoCuponSeleccionado(): number {
    return (this.cuponSeleccionado) ? this.cuponSeleccionado.porcentajeDescuento : 0;
  }

  totalPagar(): number {
    return (this.precioProductoSeleccionado() -
      ((this.precioProductoSeleccionado() * this.descuentoCuponSeleccionado()) / 100));
  }

  private dateToPicker(fecha: Date): any {
    return {
      year: fecha.getFullYear(),
      month: fecha.getMonth() + 1,
      day: fecha.getDate()
    };
  }

  private consultarCuponGenerdao(cita: Cita): void {
    this.cuponService.consultarCuponCitaGeneradora(cita.id).subscribe(
      (data: Cupon) => {
        if (data) {
          this.sweetService.popUp('Felicitaciones',
            `Tu compra a generado un cupon de descuento, CUPON: ${data.id} con un DESCUENTO DEL: ${data.porcentajeDescuento}%`,
            'success');
        }
        else {
          this.sweetService.popUp('Éxito', 'La cita fue agendada satisfactoriamente', 'success');
        }
      }
    );
  }

  guardar(): void {
    if (this.formularioCita.valid) {
      this.formularioCita.controls.cuponUsado.setValue(this.cuponSeleccionado);
      this.citaService.almacenarCita(this.formularioCita.value).subscribe(
        (data: Cita) => {
          this.consultarCuponGenerdao(data);
          this.volver();
        },
        (error) => {
          this.cuponSeleccionado = null;
          this.formularioCita.controls.cuponUsado.setValue(this.cuponSeleccionado);
          this.formularioCita.controls.fechaSolicitud.setValue(this.dateToPicker(
            this.formularioCita.controls.fechaSolicitud.value));
          this.sweetService.popUp('Error', error.error.mensaje, 'error');
        }
      );
    } else {
      this.sweetService.popUp('Alerta', 'Datos inválidos, por favor intente nuevamente', 'warning');
    }
  }

  volver(): void {
    this.zone.run(() => {
      this.router.navigate(['/citas']);
    });
  }


}
