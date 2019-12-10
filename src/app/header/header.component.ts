import { Component, OnInit, Input } from '@angular/core';
import { UtilServiceService } from 'src/services/util-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() nombreUsuario: string = null;

  constructor(public usuarioActivo: UtilServiceService) { }

  ngOnInit() {
  }

  obtenerEtiquetaUsuario() {
    if (this.nombreUsuario !== null) {
      return this.nombreUsuario;
    } else {
      return 'Usuario';
    }
  }

  cerrarSesion() {
    this.nombreUsuario = null;
    this.usuarioActivo.usuarioActivo = null;
  }

}
