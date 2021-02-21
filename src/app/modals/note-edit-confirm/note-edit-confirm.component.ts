import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Note} from '../../interfaces/interfaces';
import {NotesApiService} from '../../services/notes-api.service';

@Component({
  selector: 'app-note-edit-confirm',
  templateUrl: './note-edit-confirm.component.html',
  styleUrls: ['./note-edit-confirm.component.scss']
})
export class NoteEditConfirmComponent implements OnInit {

  noteEditForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Note,
    private fb: FormBuilder,
    private notesApiService: NotesApiService,
  ) { }

  ngOnInit(): void {
    this.noteEditForm = this.fb.group({
      title: [this.data.title, Validators.required],
      text: [this.data.text, Validators.required]
    });
  }

  onClick() {
    const formData = this.noteEditForm.getRawValue();
    this.notesApiService.editNote(this.data._id, formData).subscribe();
    this.notesApiService.getAllNotes().subscribe();
  }

}
