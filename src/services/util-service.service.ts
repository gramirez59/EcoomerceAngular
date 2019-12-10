import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/wrappers/usuario';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  public usuarioActivo: Usuario = null;

  constructor() { }
}
