import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionHttpService {

  constructor(public http: HttpClient) {

  }

  consumirServicioPost(urlService: string, data: Object): Observable<Object> {
    this.setBusy();
    let headers = new HttpHeaders();
    const this_ = this;
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http
      .post(urlService, data,
        { headers, responseType: 'text' })
      .pipe(map(response => {
        this_.clearBusy();
        return response;
      }),
        catchError(this.errorHandler))
  }
  consumirServicioPostHeader(urlService: string, data: Object, idCategoria: number): Observable<Object> {
    this.setBusy();    
    let headers = new HttpHeaders();
    const this_ = this;
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let params = new HttpParams().set('idCategory', idCategoria+'');
    return this.http
      .post(urlService, data,
        { headers, params, responseType: 'text' })
      .pipe(map(response => {
        this_.clearBusy();
        return response;
      }),
        catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    document.getElementById('loader').className = 'hide';
    return throwError(error.message || "server error.");
  }

  setBusy() {
    document.getElementById('loader').className = 'show';
  }

  clearBusy() {
    document.getElementById('loader').className = 'hide';
  }
}
