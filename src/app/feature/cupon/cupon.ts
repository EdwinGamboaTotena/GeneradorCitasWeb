import { Cita } from '../cita/cita';

export class Cupon {
    constructor(
        public usado: boolean,
        public citaGeneradora: Cita,
        public porcentajeDescuento: number,
        public id?: number) {
    }
}
