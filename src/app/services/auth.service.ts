import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { IResponse } from '../interfaces/response.interface';

const URI = environment.admin_server;

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor( private _http: HttpClient ) { }

  companies() {

    let query = `?nombre=`;
    query += `&estado=1`;
    query += `&ordenamiento=`;
    query += `&pagina=0`;
    query += `&tamanio=0`;

    return this._http.get<IResponse>( URI + '/empresas' + query );

  }

  campus(idempresa: string) {

    let query = `?nombre=`;
    query += `&estado=1`;
    query += `&ordenamiento=`;
    query += `&pagina=0`;
    query += `&tamanio=0`;
    query += `&idempresa=${idempresa}`;

    return this._http.get<IResponse>( URI + '/sedes' + query );

  }

}
