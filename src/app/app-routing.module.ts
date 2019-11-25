import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

const routes: Routes = [
    { path: 'inicio-sesion', component: InicioSesionComponent },
    { path: 'lista-productos', component: ListaProductosComponent },
    { path:  '', redirectTo:  'inicio-sesion', pathMatch:  'full' },
  
  ];
  
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }