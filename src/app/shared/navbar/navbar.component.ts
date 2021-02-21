import { Component, OnInit } from '@angular/core';
import {AuthApiService} from '../../services/auth-api.service';
import {MatDialog} from '@angular/material/dialog';
import {NoteFormComponent} from '../../forms/note-form/note-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authApiService: AuthApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialog.open(NoteFormComponent)
  }

}
