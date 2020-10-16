export class Producto {
    constructor(
        public nombre: string,
        public precio: number,
        public generaCupo: boolean,
        public porcetajeCuponGenerar: number,
        public id?: number) {
    }
}