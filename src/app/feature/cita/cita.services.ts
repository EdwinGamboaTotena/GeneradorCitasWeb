import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiCita, httpOptions } from 'src/app/shared/config/end-point';
import { Cita } from 'src/app/feature/cita/cita';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CitaService {

    constructor(
        private http: HttpClient) {
    }

    listarCitas(): Observable<any> {
        return this.http.get(apiCita, httpOptions).pipe();
    }

    consultarCitaId(id: number): Observable<any> {
        return this.http.get(`${apiCita}/${id}`, httpOptions).pipe();
    }

    almacenarCita(cita: Cita): Observable<any> {
        cita.fechaGeneracion = this.fechaConHorasCero(new Date());
        cita.precioProducto = cita.productoSolicitado.precio;
        cita.fechaSolicitud = this.fechaConHorasCero(this.pickerToDate(cita.fechaSolicitud));
        return this.http.post(apiCita, cita, httpOptions).pipe();
    }

    private fechaConHorasCero(fecha: Date): Date {
        fecha.setHours(0);
        fecha.setMinutes(0);
        fecha.setSeconds(0);
        return fecha;
    }

    private pickerToDate(fecha: any): Date {
        if (fecha !== null && fecha.year !== undefined) {
            const fechaActual = new Date();
            fechaActual.setFullYear(fecha.year);
            fechaActual.setMonth(fecha.month - 1);
            fechaActual.setDate(fecha.day);
            return fechaActual;
        } else {
            return fecha;
        }
    }
}
