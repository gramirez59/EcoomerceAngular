import { Component, OnInit } from '@angular/core';
import { Producto } from '../wrappers/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})


export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [
    {id: 1, nombre: 'Bolsas de maíz combinadas marca COMPOSTPACK', descripcion: '95 bolsas de maíz, 30 Bolsas 23x30cm, 30 Bolsas 30x40cm, 25 Bolsas 48x53cm, 15 bolsas 65x75cm',  precio: 55000, categoria: '4', stock: 20},
    {id: 2, nombre: 'Súper Dispensador Multiusos PoopyBags marca COMPOSTPACK', descripcion: 'Dispensador bolsas 23x30cm. Inclue 1 rollo de 30 bolsas de 23x30cm. Perfecto para todo tipo de collar y para guardar bolsas, snacks para mascota, dinero, llaves, audífonos.',  precio: 44000, categoria: '4', stock: 20},
    {id: 3, nombre: 'Chorizo a Base de Almendras - Finas Hierbas marca LAIVES', descripcion: 'Almendra desgrasada, sólido de soya (proteína, lecitina), sólido de maíz, proteína de quinua, aceite de oliva, especias naturales (tomillo, albahaca), concentrado de hortalizas (perejil), color natural (rojo de remolacha E 162), color naranja natural (achiote o anato CI 75120), preservante natural E 202 (sorbato de potasio 1000 mg./kg.), regulador de pH natural E 325 (lactato de sodio) 1000 mg./kg.) agua, sal marina.',  precio: 18000, categoria: '1', stock: 20}
  ];

  constructor() { }

  ngOnInit() {
  }

  obtenerCantidadProductos(): number{
    return 0;
  }

  irACarrito() {

  }

  filtrar(idCategoria: number) {

  }
}
