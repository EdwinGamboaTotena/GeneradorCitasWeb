import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

const { urlPrincipal } = environment;
export const apiCita = `${urlPrincipal}/cita`;
export const apiProducto = `${urlPrincipal}/producto`;
export const apiCupon = `${urlPrincipal}/cupon`;

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
