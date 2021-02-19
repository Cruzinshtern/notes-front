import { Injectable } from '@angular/core';
import {User} from '../interfaces/interfaces';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  token: string;
  USERS_LOGIN_URL = 'http://localhost:3000/users/login';


  constructor(
    private http: HttpClient
  ) { }

  login(user: User): Observable<any> {
    return this.http.post<any>(this.USERS_LOGIN_URL, user).pipe(
      map(response => {
        localStorage.setItem('token', response.token)
        return response.token;
      })
    )
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
