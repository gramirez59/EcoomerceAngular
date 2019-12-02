import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RegistroComponent } from './registro/registro.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    ListaProductosComponent,
    RegistroComponent,
    DetalleProductoComponent,
    CarritoComprasComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatGridListModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
