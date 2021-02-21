import {Component, Inject, OnInit} from '@angular/core';
import {NotesApiService} from '../../services/notes-api.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Note} from '../../interfaces/interfaces';

@Component({
  selector: 'app-note-delete-confirm',
  templateUrl: './note-delete-confirm.component.html',
  styleUrls: ['./note-delete-confirm.component.scss']
})
export class NoteDeleteConfirmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Note,
    private notesApiService: NotesApiService,
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.notesApiService.deleteNote(this.data._id).subscribe();
    this.notesApiService.getAllNotes().subscribe()
  }
}
