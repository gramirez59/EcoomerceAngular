import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

const routes: Routes = [
    { path: 'inicio-sesion', component: InicioSesionComponent },
    { path:  '', redirectTo:  'inicio-sesion', pathMatch:  'full' },
  
  ];
  
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }