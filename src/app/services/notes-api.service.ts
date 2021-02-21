import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Note} from '../interfaces/interfaces';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesApiService {

  notesData: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  NOTES_BASE_URL = environment.API + '/notes';

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note | Note[]> {
    return this.http.get<Note | Note[]>(this.NOTES_BASE_URL).pipe(
      map(data => {
        this.notesData.next(data);
        return data;
      })
    )
  }

  createNote(note: Note): Observable<any> {
    return this.http.post(this.NOTES_BASE_URL, note);
  }

  deleteNote(id: string): Observable<any> {
    const endpoint = `/${id}`;
    return this.http.delete(this.NOTES_BASE_URL + endpoint);
  }

  editNote(id: string, updatedNote: Note): Observable<any> {
    const endpoint = `/${id}`;
    return this.http.put(this.NOTES_BASE_URL + endpoint, updatedNote);
  }


}
