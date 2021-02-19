import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NotesApiService {

  NOTES_BASE_URL = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note | Note[]> {
    return this.http.get<Note | Note[]>(this.NOTES_BASE_URL);
  }


}
