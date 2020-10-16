import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiCita, httpOptions } from 'src/app/shared/config/end-point';
import { Cita } from 'src/app/feature/cita/cita';


@Injectable({
    providedIn: 'root'
})
export class CitaService {

    constructor(
        private http: HttpClient) {
    }

    consultarCitas() {
        return this.http.get(apiCita, httpOptions).pipe();
    }

    consultarCitaId(id: number) {
        return this.http.get(`${apiCita}/${id}`, httpOptions).pipe();
    }

    almacenarCita(cita: Cita) {
        return this.http.post(apiCita, cita, httpOptions).pipe();
    }
}
