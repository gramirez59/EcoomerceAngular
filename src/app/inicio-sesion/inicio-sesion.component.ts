import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionHttpService } from 'src/services/peticion-http.service';
import { UtilServiceService } from 'src/services/util-service.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(public router: Router, public peticionHttp: PeticionHttpService, public usuarioActivo: UtilServiceService) { }

  usuario: string;
  clave: string;
  private loginPromise;
  private static SERVICIO_AUTENTICACION = 'https://ecommercecoreback.azurewebsites.net/api/Authenticate/login';

  ngOnInit() {
  }

  ngOnDestroy() {
    if (typeof this.loginPromise !== 'undefined') {
      this.loginPromise.unsubscribe();
    }
  }

  iniciarSesion() {
    // Invocación al servicio backend para inicio de sesión
    this.loginPromise = this.peticionHttp.consumirServicioPost(InicioSesionComponent.SERVICIO_AUTENTICACION, { username: this.usuario, password: this.clave }).subscribe(
      data => {
        this.usuarioActivo.usuarioActivo = { usuario: this.usuario, clave: this.clave };
        this.router.navigate(['lista-productos']);
      }, error => {
        alert('Usario o clave incorrecta');
        console.log('No hay login :( ', error);
      }
    )    
  }

}
