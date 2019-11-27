import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto: any = null;

  constructor(private location:Location) {
    
  }
  ngOnInit() {
    const state: any = this.location.getState();
    this.producto = state.state;
    console.log('Producto ', this.producto);

  }


  ngOnDestroy() {
  }

}
