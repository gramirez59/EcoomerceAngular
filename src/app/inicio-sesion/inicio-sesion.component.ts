import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion() {
    // Invocación al servicio backend para inicio de sesión
    console.log('Inicando sesión...');
    this.router.navigate(['lista-productos']);
  }

}
