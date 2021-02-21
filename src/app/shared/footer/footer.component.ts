import { Component, OnInit } from '@angular/core';
import {AuthApiService} from '../../services/auth-api.service';
import {MatDialog} from '@angular/material/dialog';
import {LogoutConfirmComponent} from '../../modals/logout-confirm/logout-confirm.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public authApiService: AuthApiService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(LogoutConfirmComponent);
  }
}
