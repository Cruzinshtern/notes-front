import { Injectable } from '@angular/core';
import {AuthApiService} from './auth-api.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private authApiService: AuthApiService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authApiService.isLoggedOut) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
}
