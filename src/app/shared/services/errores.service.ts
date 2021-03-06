import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErroresService {
  constructor() { }

  errores(formulario: FormGroup, nombreControl: string, ngForm?: any): any {
    const errores = formulario.get(nombreControl).errors;
    return {
      hayErrores:
        (!!errores && formulario.get(nombreControl).dirty) || ((!ngForm) ? false : (!!errores && ngForm.submitted)),
      errores
    };
  }
}
