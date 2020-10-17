import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiCupon, httpOptions } from 'src/app/shared/config/end-point';

@Injectable({
    providedIn: 'root'
})
export class CuponService {

    constructor(
        private http: HttpClient) {
    }

    consultarCuponId(id: number) {
        return this.http.get(`${apiCupon}/id/${id}`, httpOptions).pipe();
    }

    consultarCuponCitaGeneradora(id: number) {
        return this.http.get(`${apiCupon}/id_cita_generadora/${id}`, httpOptions).pipe();
    }
}
