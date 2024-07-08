import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('1', req);
    // const authToken = sessionStorage.getItem('uuid');

    const modifiedReq = req.clone(
      // {
      // headers: new HttpHeaders({
      //   Authorization: sessionStorage.getItem('uuid')!,
      // }),
      // }
    );

    console.log('2', modifiedReq);
    return next.handle(modifiedReq);
  }
}
