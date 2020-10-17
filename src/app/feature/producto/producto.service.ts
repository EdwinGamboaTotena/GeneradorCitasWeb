import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiProducto, httpOptions } from 'src/app/shared/config/end-point';
import { Producto } from 'src/app/shared/models/producto';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    constructor(
        private http: HttpClient) {
    }

    listarProductos() {
        return this.http.get(apiProducto, httpOptions).pipe();
    }

    consultarProductoId(id: number) {
        return this.http.get(`${apiProducto}/${id}`, httpOptions).pipe();
    }

    almacenarProducto(producto: Producto) {
        return this.http.post(apiProducto, producto, httpOptions).pipe();
    }
}
