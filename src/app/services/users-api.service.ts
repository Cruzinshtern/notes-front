import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  USERS_BASE_URL = environment.API + '/users';

  constructor(
    private http: HttpClient
  ) { }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.USERS_BASE_URL, user);
  }

}
