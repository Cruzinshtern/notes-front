import { Injectable } from '@angular/core';
import {User} from '../interfaces/interfaces';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  token: string;
  USERS_LOGIN_URL = 'http://localhost:3001/users/login';


  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(this.USERS_LOGIN_URL, user).pipe(
      map(response => {
        console.log(response)
        localStorage.setItem('token', response.token);
        return response.token;
      })
    )
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

  public get isLoggedIn(): boolean {
    return (
      this.getToken() !== null
    );
  }

  public get isLoggedOut(): boolean {
    return (
      this.getToken() == null
    );
  }
}
