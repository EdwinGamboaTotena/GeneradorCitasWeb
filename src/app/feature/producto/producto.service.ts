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

    listarProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(apiProducto, httpOptions).pipe();
    }

    consultarProductoId(id: number): Observable<Producto> {
        return this.http.get<Producto>(`${apiProducto}/${id}`, httpOptions).pipe();
    }

    almacenarProducto(producto: Producto): Observable<Producto> {
        return this.http.post<Producto>(apiProducto, producto, httpOptions).pipe();
    }
}
