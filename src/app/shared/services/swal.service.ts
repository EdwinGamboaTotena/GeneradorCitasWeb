import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  popUp(titulo: string, mensaje: string, icono: SweetAlertIcon) {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: icono,
    });
  }

}
