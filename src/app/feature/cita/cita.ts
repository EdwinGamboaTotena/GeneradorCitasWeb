import { Cupon } from '../cupon/cupon';
import { Producto } from '../../shared/models/producto';

export class Cita {
    constructor(
        public fechaGeneracion: Date,
        public fechaSolicitud: Date,
        public productoSolicitado: Producto,
        public cuponUsado: Cupon,
        public cedulaCliente: string,
        public precioProducto: number,
        public id?: number) {
    }
}
