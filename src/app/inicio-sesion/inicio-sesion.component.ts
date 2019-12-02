import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionHttpService } from 'src/services/peticion-http.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(public router: Router, public peticionHttp: PeticionHttpService) { }

  usuario: string;
  clave: string;

  ngOnInit() {
  }

  iniciarSesion() {
    // Invocación al servicio backend para inicio de sesión
    console.log('Inicando sesión...' + ' ' + this.usuario + ' ' + this.clave);
    this.peticionHttp.consumirServicioPost('https://ecommercecoreback.azurewebsites.net/api/Authenticate/login', {username: this.usuario, password: this.clave}).subscribe(
      data=>{
        console.log('Data: ', data);
      }
    )
    //this.router.navigate(['lista-productos']);
  }

}
