import { Producto } from './producto';

export interface Compra {
    producto: Producto;
    cantidad: number;
    total: number;
}