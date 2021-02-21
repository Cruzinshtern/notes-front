import { Component, OnInit } from '@angular/core';
import {NotesApiService} from '../../services/notes-api.service';
import {Note} from '../../interfaces/interfaces';
import {MatDialog} from '@angular/material/dialog';
import {NoteDeleteConfirmComponent} from '../../modals/note-delete-confirm/note-delete-confirm.component';
import {NoteEditConfirmComponent} from '../../modals/note-edit-confirm/note-edit-confirm.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notesList;

  constructor(
    private notesApiService: NotesApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.notesApiService.getAllNotes().subscribe(
      response => {
        this.notesList = response;
      }
    )
    this.notesApiService.notesData.subscribe(
      response => {
        this.notesList = response;
      }
    );
  }
  onEditClick(note) {
    this.dialog.open(NoteEditConfirmComponent, {data: note});
  }

  onDeleteClick(note) {
    this.dialog.open(NoteDeleteConfirmComponent, {data: note});
  }

}
