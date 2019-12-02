import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
    { path: 'inicio-sesion', component: InicioSesionComponent },
    { path: 'registro-usuario', component: RegistroComponent },
    { path: 'lista-productos', component: ListaProductosComponent },
    { path: 'detalle-producto', component: DetalleProductoComponent},
    { path: 'carrito-compras', component: CarritoComprasComponent},
    { path:  '', redirectTo:  'lista-productos', pathMatch:  'full' },
  
  ];
  
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }