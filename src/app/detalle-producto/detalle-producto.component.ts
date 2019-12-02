import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Producto } from '../wrappers/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto: Producto = null;
  cantidad = 1;

  constructor(private location:Location) {
    
  }
  ngOnInit() {
    const state: any = this.location.getState();
    this.producto = state.state;
    console.log('Producto ', this.producto);

  }

  maxEnStock(){
    return this.producto.stock;
  }


  ngOnDestroy() {
  }

}
