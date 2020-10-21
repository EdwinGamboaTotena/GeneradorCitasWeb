import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiCupon, httpOptions } from 'src/app/shared/config/end-point';
import { Observable } from 'rxjs';
import { Cupon } from './cupon';

@Injectable({
    providedIn: 'root'
})
export class CuponService {

    constructor(
        private http: HttpClient) {
    }

    consultarCuponId(id: number): Observable<Cupon> {
        return this.http.get<Cupon>(`${apiCupon}/id/${id}`, httpOptions).pipe();
    }

    consultarCuponCitaGeneradora(id: number): Observable<Cupon> {
        return this.http.get<Cupon>(`${apiCupon}/id_cita_generadora/${id}`, httpOptions).pipe();
    }
}
