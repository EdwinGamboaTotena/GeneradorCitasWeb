import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiProducto, httpOptions } from 'src/app/shared/config/end-point';
import { Producto } from 'src/app/shared/models/producto';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    constructor(
        private http: HttpClient) {
    }

    listarProductos(): Observable<any> {
        return this.http.get(apiProducto, httpOptions).pipe();
    }

    consultarProductoId(id: number): Observable<any> {
        return this.http.get(`${apiProducto}/${id}`, httpOptions).pipe();
    }

    almacenarProducto(producto: Producto): Observable<any> {
        return this.http.post(apiProducto, producto, httpOptions).pipe();
    }
}
