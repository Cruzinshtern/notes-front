import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotesApiService} from '../../services/notes-api.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  noteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private notesApiService: NotesApiService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: [null, Validators.required],
      text: [null, Validators.required]
    })
  }
  onSubmit(): void {
    const formData = this.noteForm.getRawValue();
    this.noteForm.reset();
    this.notesApiService.createNote(formData).subscribe(() => {
      this.router.navigate(['notes']);
      this.dialog.closeAll();
    });
    this.notesApiService.getAllNotes().subscribe()

  }



}
