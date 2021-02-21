import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/interfaces';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  USERS_BASE_URL = environment.API + '/users';
  userData: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(
    private http: HttpClient
  ) { }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.USERS_BASE_URL, user);
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.USERS_BASE_URL);
  }

}
