import { Component, OnInit } from '@angular/core';
import { Producto } from '../wrappers/producto';
import { UtilServiceService } from 'src/services/util-service.service';
import { Router } from '@angular/router';
import { PeticionHttpService } from 'src/services/peticion-http.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})


export class ListaProductosComponent implements OnInit {
  private static SERVICIO_PRODUCTOS = 'https://ecommercecoreback.azurewebsites.net/api/ProductService/GetProducts';
  private static SERVICIO_PRODS_POR_CATEG = 'https://ecommercecoreback.azurewebsites.net/api/ProductService/GetProductsByCategory';

  public usuario = this.usuarioActivo.usuarioActivo !== null ? this.usuarioActivo.usuarioActivo.usuario : null;
  listaDeProdusctosObserver;
  productos: Producto[] = [];
  constructor(public router: Router, public peticionHttp: PeticionHttpService, public usuarioActivo: UtilServiceService) { }

  ngOnInit() {
    this.obtenerTodosLosProductos();
  }

  private obtenerTodosLosProductos() {
    this.listaDeProdusctosObserver = this.peticionHttp.consumirServicioPost(ListaProductosComponent.SERVICIO_PRODUCTOS, null).subscribe(
      (data: any) => {
        const prods = JSON.parse(data);
        prods.forEach((x) => {
          this.productos.push(x);
        });
      }, error => {
        alert('Error al obtener los productos');
        console.log('Error: ', error);
      }
    );
  }

  obtenerCantidadProductos(): number {
    return 0;
  }

  irACarrito() {

  }

  filtrar(idCategoria: number) {
    this.productos = [];
     if (idCategoria == 0) {
      this.obtenerTodosLosProductos();
      return;
    }    
    this.listaDeProdusctosObserver = this.peticionHttp.consumirServicioPostHeader(ListaProductosComponent.SERVICIO_PRODS_POR_CATEG, null, idCategoria).subscribe(
      (data: any) => {
        const prods = JSON.parse(data);
        prods.forEach((x) => {
          this.productos.push(x);
        });
      }, error => {
        alert('Error al obtener los productos');
        console.log('Error: ', error);
      }
    )
  } 
}
