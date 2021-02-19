import { Component, OnInit } from '@angular/core';
import {NotesApiService} from '../../services/notes-api.service';
import {Note} from '../../interfaces/interfaces';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notesList: Note | Note[] = [];

  constructor(
    private notesApiService: NotesApiService
  ) { }

  ngOnInit(): void {
    this.notesApiService.getAllNotes().subscribe(
      response => {
        this.notesList = response;
      }
    )
  }

}
