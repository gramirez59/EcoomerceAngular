import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

const routes: Routes = [
    { path: 'inicio-sesion', component: InicioSesionComponent },
    { path: 'lista-productos', component: ListaProductosComponent },
    { path: 'detalle-producto', component: DetalleProductoComponent},
    { path:  '', redirectTo:  'inicio-sesion', pathMatch:  'full' },
  
  ];
  
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }