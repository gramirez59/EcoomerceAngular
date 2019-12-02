import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() nombreUsuario: string = null;

  constructor() { }

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
    
  }

}
