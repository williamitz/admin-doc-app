import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UiService } from './ui.service';
import { EIcon } from '../interfaces/alert_icon.interface';

@Injectable({providedIn: 'root'})
export class InterceptorService implements HttpInterceptor {

  constructor( private _ui: UiService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers = new HttpHeaders({
      authorization: 'Bearer d94ed1w98fwef8ewrf9r84$R23484$',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });

    let reqClone = req.clone({ headers });

    return next.handle(reqClone).pipe(
      catchError((err: any) => {
        this._ui.onCloseLoading();

        let errors = ['Error al completar la solicitud'];

        if (err instanceof HttpErrorResponse) {

          if (err.status == 400)
            errors.push('error de servidor');

          if (err.status == 401)
            errors.push('authenticar primero');

          if (err.status == 403)
            errors.push('no cuenta con los permisos necesarios');

          if (err.status == 404)
            errors.push('sin contenido');

          if (err.status == 405)
            errors.push('servicio deshabilitado');

          if (err.status == 422)
            errors.push('datos inválidos');

          this._ui.onShowAlert( 'Error al procesar solicitud', EIcon.error, errors.join(', ') )

        }

        return throwError(err);
      })
    );

  }

}
