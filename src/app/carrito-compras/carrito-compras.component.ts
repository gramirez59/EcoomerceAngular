import { Component, OnInit } from '@angular/core';
import { Compra } from '../wrappers/compra';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  listaDeCompras: Compra[] = [];
  precioTotalCompra = 0;

  constructor() { }

  ngOnInit() {
   let compra1: Compra = {
      producto: {
        "id": 1,
        "idCategory": 4,
        "name": "Bolsas de maíz combinadas marca COMPOSTPACK",
        "description": "95 bolsas de maíz, 30 Bolsas 23x30cm, 30 Bolsas 30x40cm, 25 Bolsas 48x53cm, 15 bolsas 65x75cm",
        "price": 55000,
        "stock": 50
      },
      cantidad: 5,
      total: 0
    };

    let compra2: Compra = {
      producto: {
        "id": 2,
        "idCategory": 4,
        "name": "Súper Dispensador Multiusos PoopyBags marca COMPOSTPACK",
        "description": "Dispensador bolsas 23x30cm. Inclue 1 rollo de 30 bolsas de 23x30cm. Perfecto para todo tipo de collar y para guardar bolsas, snacks para mascota, dinero, llaves, audífonos.",
        "price": 44000,
        "stock": 50
      },
      cantidad: 20,
      total: 0
    }

    let compra3: Compra = {
      producto: {
        "id": 3,
        "idCategory": 1,
        "name": "Chorizo a Base de Almendras - Finas Hierbas marca LAIVES",
        "description": "Almendra desgrasada, sólido de soya (proteína, lecitina), sólido de maíz, proteína de quinua, aceite de oliva, especias naturales (tomillo, albahaca), concentrado de hortalizas (perejil), color natural (rojo de remolacha E 162), color naranja natural (achiote o anato CI 75120), preservante natural E 202 (sorbato de potasio 1000 mg./kg.), regulador de pH natural E 325 (lactato de sodio) 1000 mg./kg.) agua, sal marina.",
        "price": 18000,
        "stock": 20
      },
      cantidad: 1,
      total: 0
    }
    this.listaDeCompras.push(compra1);
    this.listaDeCompras.push(compra2);
    this.listaDeCompras.push(compra3);

    console.log(this.listaDeCompras.length);

  }

  cantidadDeProductos(){
    return this.listaDeCompras.length;
  }

  calcularTotal() {
    this.precioTotalCompra = 0;
    for (let index = 0; index < this.listaDeCompras.length; index++) {
      this.precioTotalCompra = this.precioTotalCompra + this.listaDeCompras[index].total;
    }
    // console.log('precioTotalCompra : ', this.precioTotalCompra);
    return this.precioTotalCompra;
  }

  calcularTotalProducto(idProducto: number, precioUnitario: number, cantidad: number) {
    const total = precioUnitario * cantidad;
    for (let index = 0; index < this.listaDeCompras.length; index++) {
      if (this.listaDeCompras[index].producto.id == idProducto) {
        this.listaDeCompras[index].total = total;
        break;
      }
    }
    return total;
  }

  comprar() {

  }

  guardarCompra() {

  }

}
