import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthApiService} from '../services/auth-api.service';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {

  constructor(public authApiService: AuthApiService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `${this.authApiService.getToken()}`
      }
    });
    return next.handle(request);
  }
}
