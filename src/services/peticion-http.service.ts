import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
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
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http
      .post(urlService, data,
        { headers, responseType: 'text' })
      .pipe(map(response => {
        return response;
      }),
      catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
}
}
